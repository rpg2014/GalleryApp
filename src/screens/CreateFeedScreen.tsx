import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useStore } from '../common/store';
import { API, graphqlOperation } from "aws-amplify";
import { Text, TextInput, Searchbar, useTheme, Button, Surface, Divider, Snackbar } from 'react-native-paper';
import * as mutations from '../../graphql/mutations';
import { useState } from 'react';
import * as Crypto from 'expo-crypto';
import HeaderBar from './HeaderBar'


export const CreateFeed = () => {
    const store = useStore();
    const theme = useTheme();

    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);
    const onDismissSnackBar = () => setSnackbarVisible(false);

    const [feedName, setFeedName] = useState("");
    const createFeed = async () => {
        const digest = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA512,
            feedName+store.user?.id+"salty",
            {encoding: Crypto.CryptoEncoding.HEX}
        );
        const response = await API.graphql(graphqlOperation(mutations.createFeed, {input: {name: feedName, id: digest, userID: store.user ? store.user.id : "unsigned in user"}}))
        store.dispatch({type:"MERGE_STATE", data:{user: response.data.createFeed.user}})
        onToggleSnackBar()
    }
    store.user?.id
    return(<><HeaderBar/>
        <View style={styles.container}>
            
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
        style={{elevation: 6}}
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
      elevation:1,
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
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
      elevation:2,
      
    }
  });
  