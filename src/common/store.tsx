import React, { createContext, useContext, useReducer, useEffect, Context, ReducerWithoutAction, ReactNode } from 'react';
import { Feed, Post, User } from '../../models';
import AsyncStorage from '@react-native-community/async-storage';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {CognitoUser} from "amazon-cognito-identity-js"
import { getUser } from '../../graphql/queries';
import { useFocusEffect } from '@react-navigation/native';
import { CreateUserMutation, CreateUserMutationVariables, GetFeedQuery, GetUserQuery, GetUserQueryVariables } from '../API';
import uuid from "react-native-uuid"
import { GraphQLResult } from "@aws-amplify/api";
import { ActivityIndicator } from 'react-native-paper';
import { createUser } from '../../graphql/mutations';
import {Map }from 'immutable'
import { convertUserQueryToUser } from './common';

export interface IAppState {
    user: User
    postsByFeed: Map<string, Post[] | null>
    authData?: CognitoUser 
    selectedFeed?: Feed
    //auth state from cognito
}
interface IAction<T> {
    type: string,
    data: T
}
export interface IAppDispatch {
    dispatch: (action: any) => void
}
export interface IAppActions {
    setSelectedFeedAction: (feed: Feed) => IAction<Feed>
    setPostsByFeed: (posts: Map<string, Post[] | null>) => IAction<Map<string, Post[] | null>>,
    saveState: (state: IAppState) => void
}
const initalUserGlobal: User = {
    id: "1",//uuid.v1(),
    feeds: [],
    feedIDs: []
}
export const initialStateGlobal: IAppState & IAppDispatch = { 
    user: initalUserGlobal,
    postsByFeed: Map(),
    authData: undefined,
    selectedFeed: undefined,
    dispatch: (action: {type: string, data: any}) => {}
}


//TODO change action: any to a enum or something
const reducer = (state: IAppState, action: IAction<any>): IAppState => {
    // console.log(action)
    switch (action.type) {
        case "SET_STATE": 
            return{
                ...action.data
            }
        case "MERGE_STATE": 
            return {
                ...state,
                ...action.data
            }
        case "SET_USER": 
            return {
                ...state,
                user: action.data,
            }
        case "SET_POSTS_BY_FEED" :
            return {
                ...state,
                postsByFeed: action.data
            }
        case "SET_SELECTED_FEED":
            return {
                ...state,
                selectedFeed: action.data
            }
        default :
        return {
            ...state,
            ...action.data
        }
    }
}
const StoreContext = React.createContext<IAppState& IAppDispatch>(initialStateGlobal);


interface IStoreProvider {
    initalState: IAppState,
    children: ReactNode
}

//Fetches user profile 
export const StoreProvider = (props: IStoreProvider) => {
    
    const [state, dispatch] = useReducer(reducer, props.initalState);
    const [errors, setErrors] = React.useState<String[]>()
    
    
    const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

    //Then fetch User profile from graphql and save it to state.  
    // if is newly created I need to create a user in db, 
    React.useEffect(() => {
        var response: GraphQLResult<GetUserQuery>

        const fetchUserAndSetState = async () => {
            try {
                console.log("state: " + JSON.stringify(state as IAppState) )
                console.log("initalGlobal user: " + initalUserGlobal.id)
                // if((state as IAppState).user.id === initalUserGlobal.id) {
                //     console.log("Creating user")
                //     const mutationMV: CreateUserMutationVariables = {input: {
                //         id: initalUserGlobal.id
                //     }}
                //     const response = await API.graphql(graphqlOperation(createUser, mutationMV)) as GraphQLResult<CreateUserMutation>
                //     if(response.errors){
                //         console.log("Errors while creating user: " + JSON.stringify(response.errors))
                //     }
                //     if(response.data && response.data.createUser) {
                //         console.log("User created")
                //         const saveState = async () => {
                //             if(response.data && response.data.createUser) {
                //                 const user = convertUserQueryToUser(response.data.createUser)
                //                 AsyncStorage.setItem("user_info", JSON.stringify(user))
                //                     .then(_ => console.log("[CACHE] Saved State"))
                //                     .catch(error  => console.log("[ERROR] Error saving state: " + JSON.stringify(error)))
                //             }
                //         }
                        
                //         saveState();
                //     }
                // } else {
                    console.log("refreshing user data")
                    // refresh user data from db
                    const qMV: GetUserQueryVariables = { id: (state as IAppState).user.id }
                    
                    response = await API.graphql(graphqlOperation(getUser, qMV)) as GraphQLResult<GetUserQuery>//state.authData.getSignInUserSession().getSessionId}) )
                    if (response.errors) {
                        setErrors(response.errors)
                        console.log(response)
                    }
                    if (response.data && response.data.getUser) {
                        console.log("Fetched user data for user id " + response.data.getUser.id)
                        dispatch({
                            type: "SET_USER",
                            data: convertUserQueryToUser(response.data.getUser)
                        })
                        setIsLoadingComplete(true);
                    // }  
                }
            } catch (e) {
                console.log(e)
            }
        }
        if(!isLoadingComplete)
        fetchUserAndSetState();
    }, []);

    React.useEffect(() => {
        
        if(state.user && state.user.id) {
            
            AsyncStorage.setItem("user_info", JSON.stringify(state))
            .then(_ => console.log("[CACHE] Saved State"))
            .catch(error  => console.log("[ERROR] Error saving state: " + JSON.stringify(error)))
        }
    }, [state.user?.id, state.user?.feeds?.length])

    
    return (
        <StoreContext.Provider value={{...state, dispatch}}>
        {props.children}
      </StoreContext.Provider>
    )
  }


  
export const useStore = () => {
    return useContext(StoreContext)
}

export const useActions = (): IAppActions & IAppDispatch => {
    const state = useStore();
    const setSelectedFeed = (feed: Feed) => {
       return{
            type: "SET_SELECTED_FEED",
            data: feed,
        }
    }
    const setPostsByFeed = (posts: Map<string,Post[]>) => {
        return{
             type: "SET_POSTS_BY_FEED",
             data: posts,
         }
     }

    const saveState = async (store: IAppState) => {
        AsyncStorage.setItem("user_info", JSON.stringify(store))
        .then(_ => console.log("[CACHE] Saved State"))
        .catch(error  => console.log("[ERROR] Error saving state: " + JSON.stringify(error)))
    }
    return {
        saveState, 
        setPostsByFeed,
        setSelectedFeedAction: setSelectedFeed,
        dispatch: state.dispatch
    }
}