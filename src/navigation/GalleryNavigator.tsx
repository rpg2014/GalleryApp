import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import HeaderBar from '../screens/HeaderBar'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeedTab, { FeedTabNavigator, FeedParamList, IFeedNavigatorProps } from '../screens/GalleryTab/FeedTab';
import {Text} from 'react-native-paper'
import UploadScreen from '../screens/UploadScreen';
import {  Feed} from '../../models';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions, Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useStore } from '../common/store';
import NotFoundScreen from '../screens/NotFoundScreen';
import EditScreenInfo from '../components/EditScreenInfo';
import {CreateFeed} from '../screens/CreateFeedScreen'


export type BottomTabParamList = {
  Gallery: undefined;
  Upload: undefined;
  [key: string]: undefined;
};
const Gallery = createDrawerNavigator<BottomTabParamList>();

export default function GalleryNavigator() {
  // const dimensions = useWindowDimensions();
  const screenWidth = Dimensions.get("window").width
  const isLargeScreen = screenWidth >= 768;
  const theme = useTheme()
  const tabs: Feed[] | undefined = useStore().user?.feeds.items;
  const isFocused = useIsFocused();
  const navigator = useNavigation()
  
  return (
  
    <Gallery.Navigator
      initialRouteName={tabs && tabs[0] ? tabs[0].id: ""}
      drawerType={isLargeScreen ? 'slide' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '66%'}}
      edgeWidth={screenWidth  }
      >
        {/** Put feed subscription screen here */}
        <Gallery.Screen 
        key="home" 
        name="Home"
        
        >{() => <CreateFeed /> }</Gallery.Screen>
        
        {tabs &&  tabs.length !==0 ? tabs.map(tab => {
          
          return GalleryScreen(tab, FeedTabNavigator )
          }) : <></>}
    </Gallery.Navigator>
    
  );
}

const GalleryScreen =(feed: Feed, Component: (arg0: IFeedNavigatorProps) => any) => {
  return (
    <Gallery.Screen
        key={feed.id}
        name={feed.name}
        // component={Component}
        
        // options={{
        //   tabBarIcon: ({ color }) => <SafeAreaView><TabBarIcon name="ios-code" color={color} /></SafeAreaView>,
        // }}
      >
        {() =><Component feed={feed}/>}
      </Gallery.Screen>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}



