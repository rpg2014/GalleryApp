import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HeaderBar from '../screens/HeaderBar'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GalleryTabScreen from '../screens/GalleryTab/GalleryTab';
import TabTwoScreen from '../screens/TabTwoScreen';
import {  TabOneParamList} from '../types';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions, Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export type BottomTabParamList = {
  Gallery: undefined;
  Upload: undefined;
  [key: string]: undefined;
};
const BottomTab = createDrawerNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  // const dimensions = useWindowDimensions();
  const screenWidth = Dimensions.get("window").width
  const isLargeScreen = screenWidth >= 768;
  const theme = useTheme()
  const tabs = ['Gallery1', "Gallery2"]
  const isFocused = useIsFocused();
  const navigator = useNavigation()
  return (
    <>
    <BottomTab.Navigator
      initialRouteName="Upload"
      drawerType={isLargeScreen ? 'slide' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '66%', elevation:0 }}
      edgeWidth={screenWidth  }
      >
        
        {tabs.map(tab => BottomTabScreen(tab, GalleryTabNavigator))}
    
      {/* <BottomTab.Screen
        name="Gallery"
        component={TabOneNavigator}
        // options={{
        //   tabBarIcon: ({ color }) => <SafeAreaView><TabBarIcon name="ios-code" color={color} /></SafeAreaView>,
        // }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        // options={{
        //   tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        // }}
      /> */}
    </BottomTab.Navigator>
    <Portal>
    <FAB
      icon="plus"
      visible={isFocused}
      onPress={() => navigator.navigate("Upload")}
      style={{
        
        position: 'absolute',
        bottom: 100,
        right: '10%',
      }}
    />
  </Portal>
  </>
  );
}

const BottomTabScreen =(name: string, component: any) => {
  return (
    <BottomTab.Screen
        key={name}
        name={name}
        component={component}
        // options={{
        //   tabBarIcon: ({ color }) => <SafeAreaView><TabBarIcon name="ios-code" color={color} /></SafeAreaView>,
        // }}
      />
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function GalleryTabNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={GalleryTabScreen}
        options={{ headerShown: true,
        header: () => <HeaderBar/>
      }}
      />
    </TabOneStack.Navigator>
  );
}


