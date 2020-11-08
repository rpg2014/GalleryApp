import React, { createContext, useContext, useReducer, useEffect, Context } from 'react';
import { Feed, User } from '../../models';
import AsyncStorage from '@react-native-community/async-storage';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {CognitoUser} from "amazon-cognito-identity-js"
import { getUser } from '../../graphql/queries';

export interface IAppState {
    user?: User
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
    setSelectedFeed: (feed: Feed) => IAction<Feed>
}
const initialStateGlobal: IAppState & IAppDispatch = { 
    user: undefined,
    authData: undefined,
    selectedFeed: undefined,
    dispatch: (action: {type: string, data: any}) => {}
}


//TODO change action: any to a enum or something
const reducer = (state: IAppState, action: any) => {
    console.log(action)
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

export const StoreProvider = (props:any) => {
    
    const [state, dispatch] = useReducer(reducer, initialStateGlobal);
    
    const [initialState, setInitialState] = React.useState<IAppState>();
    const [isLocalLoadingComplete, setIsLocalLoadingComplete] = React.useState(false);
    const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

    React.useEffect(() => {
        async function loadInitialStateFromStorage() {
            //Load inital user state
            if (!initialState) {
                const state = await AsyncStorage.getItem('user_info')
                const parsedState = state !== null ? JSON.parse(state) : initialStateGlobal;
                dispatch({
                    type: "SET_STATE",
                    data: parsedState
                })
                setIsLocalLoadingComplete(true)
            }
        }
        loadInitialStateFromStorage();
        
    }, [initialState]);


    // In this useEffect, wait till done loading from storage, then check to see if user exsists and has feeds, if not, auth, then pull feeds by user.  
    React.useEffect(() => {
        async function loadAuthedUserFromCognito() {
            if(isLocalLoadingComplete && !state.user){
                Auth.currentAuthenticatedUser().then(user => dispatch({
                    type: "MERGE_STATE",
                    data: {
                        authData: user
                    }
                }))
            }
            
        }
        
    })

    //Then fetch User profile from graphql
    React.useEffect(() => {
        var data: any = {}
    
    const fetchPosts = async () => {
      try {
        data  = await API.graphql(graphqlOperation(getUser, {id: "1"}))//state.authData.getSignInUserSession().getSessionId}) )
        if(data){
            setIsLoadingComplete(false);
        }

      } catch (e) {
        console.log(e)
      }
      console.log("data")
      console.log(data)
      if(data && !isLoadingComplete){
        console.log("feedbyuser")
        console.log(data.data)
        let items: Feed[] = data.data.getUser.feeds.items
        console.log(items[0].id)
        dispatch({
            type: "MERGE_STATE",
            data: {
                user: data.data.getUser
            }
        })
      }
    }
    fetchPosts();
    },[state.authData]);
    
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
    return {
        setSelectedFeed,
        dispatch: state.dispatch
    }
}