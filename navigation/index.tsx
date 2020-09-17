import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, UploadTabParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { useTheme, Appbar} from 'react-native-paper';
import UploadScreen from '../screens/TabTwoScreen';
import { Ionicons } from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation(props:{theme: any}) {
  const theme = useTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      //change below to just theme when I get combined themes working
      theme={theme as any}>
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
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="Upload"
        component={UploadNavigator}
        options={{
          ...TransitionPresets.ModalTransition 
        //   tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const UploadStack = createStackNavigator<UploadTabParamList>();

function UploadNavigator() {
  const theme= useTheme()
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{ headerTitle: 'Upload', 
          headerBackImage: () => <Appbar.Action icon='close' color={theme.colors.text} /> ,
          
      }}
      />
    </UploadStack.Navigator>
  );
}