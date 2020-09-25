import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';


import * as React from 'react';
import HeaderBar from '../screens/HeaderBar'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeedTab, { FeedTabNavigator, FeedParamList } from '../screens/GalleryTab/FeedTab';
import UploadScreen from '../screens/UploadScreen';
import {  TabOneParamList} from '../types';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions, Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


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
  const tabs = ['Gallery1', "Gallery2"]
  const isFocused = useIsFocused();
  const navigator = useNavigation()
  
  return (
  
    <Gallery.Navigator
      initialRouteName={tabs[0]}
      drawerType={isLargeScreen ? 'slide' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '66%'}}
      edgeWidth={screenWidth  }
      >
        {tabs.map(tab => {
          
          return GalleryScreen(tab, FeedTabNavigator )
          })}
    </Gallery.Navigator>
    
  );
}

const GalleryScreen =(name: string, Component: any) => {
  return (
    <Gallery.Screen
        key={name}
        name={name}
        // component={Component}
        // options={{
        //   tabBarIcon: ({ color }) => <SafeAreaView><TabBarIcon name="ios-code" color={color} /></SafeAreaView>,
        // }}
      >
        {() =><Component name={name}/>}
      </Gallery.Screen>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}



