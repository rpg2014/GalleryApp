import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { IAppState, initialStateGlobal, useStore } from '../common/store';
import { Auth } from 'aws-amplify';


interface ICachedResources {
  initalState?: IAppState;
  isLoadingComplete: boolean;
}


export default function useCachedResources(): ICachedResources {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initalState, setInitalState] = React.useState<IAppState>();
  

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        });

        //fetch user profile, will need to add auth
        await AsyncStorage.getItem('user_info')
          .then(state=> /*state !== null ?  JSON.parse(state):*/ initialStateGlobal)
          .then(state => {
            // console.log("loadedState: " + JSON.stringify(state))
            return state
          })
          .then(state=> setInitalState(state))
          

        // //load auth data from cogneto?
        // //might need to do a signin thingy
        // await Auth.currentAuthenticatedUser().then(user => store.dispatch({
        //   type: "MERGE_STATE",
        //   data: {
        //       authData: user
        //   }
        // }))

        
        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  // save local state on 

  return {isLoadingComplete, initalState};
}
