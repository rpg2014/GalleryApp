import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useActions, useStore } from '../common/store';
import { API, graphqlOperation } from "aws-amplify";
import { Text, TextInput, Searchbar, useTheme, Button, Surface, Divider, Snackbar } from 'react-native-paper';
import * as mutations from '../../graphql/mutations';
import { useState } from 'react';
import { GraphQLResult } from "@aws-amplify/api";
import * as Crypto from 'expo-crypto';
import { CreateFeedInput, CreateFeedMutation, CreateFeedMutationVariables, UpdateUserMutation, UpdateUserMutationVariables } from '../API'
import HeaderBar from './HeaderBar'
import { convertUserQueryToUser } from '../common/common';


export const CreateFeed = () => {
    const store = useStore();
    const theme = useTheme();
    const actions = useActions();

    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [snackbarText, setSnackbarText] = React.useState("");
    const onToggleSnackBar = (text: string) => {
        setSnackbarText(text)
        setSnackbarVisible(!snackbarVisible);
    }
    const onDismissSnackBar = () => setSnackbarVisible(false);

    const [feedName, setFeedName] = useState("");
    const createFeed = async () => {
        //Create id for feed
        const digest = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA512,
            feedName + store.user?.id + "salty",
            { encoding: Crypto.CryptoEncoding.HEX }
        );

        // Create Feed
        let input: CreateFeedMutationVariables = {
            input: {
                name: feedName,
                id: digest,
                userID: store.user.id
            }
        }
        const response = await API.graphql(graphqlOperation(mutations.createFeed, input)) as GraphQLResult<CreateFeedMutation>
        if (response.errors) {
            console.log("Error: " + JSON.stringify(response.errors))
        }
        if (response.data?.createFeed) {
            onToggleSnackBar(`Created Feed: ${feedName}`)
        }


        // update user info 
        let userInput: UpdateUserMutationVariables = {
            input: {
                id: store.user.id,
                feedIDs: store.user.feedIDs ? store.user.feedIDs.concat(digest) : [digest]

            }
        }
        console.log(userInput.input)
        const updateQuery = API.graphql(graphqlOperation(mutations.updateUser, userInput)) as Promise<GraphQLResult<UpdateUserMutation>>
        updateQuery.then(response => {
            if (response.errors) {
                console.log("ERROR: " + JSON.stringify(response.errors))
            }
            if (response.data && response.data.updateUser) {
                setSnackbarText(snackbarText.concat(".  Updated User Info"))
                store.dispatch({ type: "SET_USER", data: convertUserQueryToUser(response.data.updateUser) })
            }
        })



    }
    
    return (<><HeaderBar title={"Home"} subTitle={"Create or join a feed"} />
        <View style={styles.container}>
            <Text>{JSON.stringify(store)}</Text>
            <Divider style={styles.separator}/>
            <Text style={styles.title}>
                Create a new Feed
            </Text>
            <Divider style={styles.separator} />

            <TextInput mode='flat'
                label='Name'
                placeholder='Feed Name'
                dense={true}

                style={styles.textInput}
                onChangeText={setFeedName}
                // icon='upload'
                value={feedName}
                right={<TextInput.Icon name='upload' disabled color={theme.colors.accent} centered={true} />}
            />
            <Divider style={{ ...styles.separator, width: '70%', marginVertical: 25 }} />
            <Button mode='contained'
                icon='arrow-right'
                style={{ elevation: 2 }}
                onPress={() => createFeed()}
            >
                Create {feedName}
            </Button>

            <Snackbar
                visible={snackbarVisible}
                style={{ elevation: 6 }}
                onDismiss={onDismissSnackBar}
                duration={2000}
            // action={{
            //   label: 'Undo',
            //   onPress: () => {
            //     // Do something
            //   },
            // }}>
            >Created Feed: {feedName}</Snackbar>
        </View></>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        // height: '10%',
        width: '65%',
        elevation: 2,

    }
});
