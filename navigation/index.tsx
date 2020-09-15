import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, UploadTabParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { useTheme,DarkTheme, DefaultTheme } from 'react-native-paper';
import TabTwoScreen from '../screens/TabTwoScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation(props:{theme: any}) {
  const theme = useTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      //change below to just theme when I get combined themes working
      theme={theme.dark ? DarkTheme as any : DefaultTheme as any}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="Upload"
        component={UploadNavigator}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid 
        //   tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const UploadStack = createStackNavigator<UploadTabParamList>();

function UploadNavigator() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen
        name="Upload"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </UploadStack.Navigator>
  );
}