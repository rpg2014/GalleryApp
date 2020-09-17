import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HeaderBar from '../screens/HeaderBar'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GalleryTabScreen from '../screens/GalleryTab/GalleryTab';
import UploadScreen from '../screens/TabTwoScreen';
import {  TabOneParamList} from '../types';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions, Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

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
      initialRouteName={tabs[0]}
      drawerType={isLargeScreen ? 'slide' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '66%', elevation:0 }}
      edgeWidth={screenWidth  }
      >
        {tabs.map(tab => BottomTabScreen(tab, GalleryTabNavigator))}
    </BottomTab.Navigator>
    <Portal>
    <FAB
      icon="upload"
      visible={isFocused}
      onPress={() => navigator.navigate("Upload")}
      style={{
        elevation:5,
        position: 'absolute',
        bottom: 100,
        right: '10%',
      }}
    />
  </Portal>
  </>
  );
}

const BottomTabScreen =(name: string, Component: any) => {
  return (
    <BottomTab.Screen
        key={name}
        name={name}
        // options={{
        //   tabBarIcon: ({ color }) => <SafeAreaView><TabBarIcon name="ios-code" color={color} /></SafeAreaView>,
        // }}
      >
        {() =><Component name={name}/>}
      </BottomTab.Screen>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator<TabOneParamList>();

function GalleryTabNavigator(props: {name: string, component?: any}) {
  type TabOneParamList = {
    [name: string]: undefined;
  };

  const TabOneStack = createStackNavigator<TabOneParamList>();
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name={props.name}
        component={GalleryTabScreen}
        options={{ headerShown: true,
        header: () => <HeaderBar title={props.name}/>,
        headerStyle: styles.bottom
      }}
      />
    </TabOneStack.Navigator>
  );
}


const styles = StyleSheet.create({bottom: {
  width: '100%',
  elevation: 4,
  // height: NAVBAR_HEIGHT
  // paddingTop: insets.top,
  // height: 0
// position: 'absolute',
// left: 0,
// right: 0,
// bottom: 0,
},
});