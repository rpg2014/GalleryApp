import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Crypto from 'expo-crypto';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, TextInput, Searchbar, useTheme, Button, Surface, Divider, Snackbar, ActivityIndicator } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { Feed } from '../../models';
import { useRoute } from '@react-navigation/native';
import { useStore } from '../common/store';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { CreatePostInput, CreatePostMutation, CreatePostMutationVariables, PostType } from '../API';
import { GraphQLResult } from "@aws-amplify/api";

// import { Icon } from 'react-native-paper/lib/typescript/src/components/List/List';

// import { View } from '../components/Themed';

export interface IUploadProps {
  feed?: Feed;
  route: any
}

export default function UploadScreen(props: IUploadProps) {
  const route: any = useRoute();
  const store = useStore();
  const params: {feed:string} = route.params
  const [urlToUpload, setUrlToUpload] = React.useState('');
  const [feedToUploadTo, setFeedToUploadTo] = React.useState(store.selectedFeed);

  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [createPostResponse, setCreatePostResponse] = React.useState({});

  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);

  const onDismissSnackBar = () => setSnackbarVisible(false);
  const theme = useTheme();
  const onChangeURL = (query:string) => setUrlToUpload(query);

  const createPost = async () => {
    setIsLoading(true);
    const postType = PostType.IMAGE;//getPostType() // make this detect if image link or other site
    const idDigest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      urlToUpload+feedToUploadTo+store.user?.id +"salt",
    );
  
    let input: CreatePostInput = {
      id: idDigest,
      feedID: feedToUploadTo? feedToUploadTo.id : "",
      content: urlToUpload,
      postType,
      userID: store.user? store.user.id : "unknown"
    }
    let createPostMV: CreatePostMutationVariables = {
      input
    }
    console.log(createPostMV)
    const response = await API.graphql(graphqlOperation(mutations.createPost, createPostMV))as GraphQLResult<CreatePostMutation>
    setCreatePostResponse(response)
    console.log(response)
    setIsLoading(false)
    setUrlToUpload("")
    onToggleSnackBar()
  }

  // React.useEffect(() => {
  //   if(params && params.feed){
  //   setFeedToUploadTo(params.feed)
  //   }
  // },[route])
  // console.log("props" +JSON.stringify(props.route))
  if(!store.user?.feeds || feedToUploadTo == undefined) {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Sorry, you don't belong to any feeds</Text>
        <Divider style={styles.separator} />
        <Text >Join a feed to upload</Text>
      </View>
    )
  }
  // console.log("storefeed; " + JSON.stringify(store.selectedFeed?.name))
  // console.log("feedtoUploadTo " + JSON.stringify(feedToUploadTo.name))
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Add a new thing to a feed</Text>
      
      <Divider style={styles.separator} />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {/* <Surface style={{elevation: }}> */}
      <Picker 
      mode='dropdown'
      style={{
        ...styles.textInput,
          backgroundColor: theme.colors.surface,
          // width: '50%',
          marginBottom: 10,
          elevation: 2,
          borderRadius: theme.roundness
          // height: '10%'
        }}
      itemStyle= {{
        backgroundColor: theme.colors.surface,
        color: 'red'//theme.colors.onSurface,
        
      }}
      onValueChange={(itemValue: any, itemIndex:number) => {
        setFeedToUploadTo(itemValue);
      }}
      selectedValue={feedToUploadTo.id}
      prompt='Feed'
      >
        { store.user.feeds.map((feed: Feed) => {
          // console.log("feed: " + JSON.stringify(feed))
          return <Picker.Item key={feed.id} label={feed.name} value={feed.id} />
        })}
      </Picker>
      {/* </Surface> */}
      

      <TextInput mode='flat'
        label='URL'
        placeholder='URL To UPLOAD'
        dense={true}

        style={styles.textInput}
        onChangeText={onChangeURL}
        // icon='upload'
        value={urlToUpload}
        right={<TextInput.Icon  name='upload' disabled  color={theme.colors.accent} centered={true}/>}
        //TODO: add input mask below for Http 
        />
        
        
        {/* <View style={styles.seperator}/> */}
        <Divider style={{...styles.separator, width: '70%', marginVertical: 25}}/>
        {isLoading ? <ActivityIndicator animating={true} /> :
    
        <Button mode='contained'
        icon='arrow-right'
        style={{ elevation: 2}}
        onPress={() => createPost()}
        >
          Add to {feedToUploadTo.name}
        </Button>
        }
      {createPostResponse.errors ? <><Divider style={styles.separator}/>
      <Text>Error: {JSON.stringify(createPostResponse)}</Text></> : <></>}

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
        >
        {createPostResponse.data ? <Text>Uploaded image to feed:  {feedToUploadTo.name}</Text>: <Text>Upload Failed: {JSON.stringify(createPostResponse)}</Text>} 
      </Snackbar>
    </View>
  );
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
