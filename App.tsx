import { StatusBar } from 'expo-status-bar';
import Amplify from "aws-amplify";
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider,  useTheme, DarkTheme, DefaultTheme } from 'react-native-paper';
import useCachedResources from './src/hooks/useCachedResources';
import { expo as expoApp } from './app.json';
import Navigation from './src/navigation';
import { AppRegistry } from 'react-native';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import Themes, { DarkThemeCustom, DefaultThemeCustom, SlateTheme } from './src/constants/Themes';
import AsyncStorage from '@react-native-community/async-storage';
import { createStoreContext, IAppState, StoreContext, StoreProvider } from './src/common/store';
import awsExports from "./aws-exports";



enableScreens();


Amplify.configure(awsExports);

export default function App() {
  const {isLoadingComplete, initalState} = useCachedResources();
  const colorScheme = useTheme();
  const [darkMode, setDarkMode] = React.useState(false);
  const defaultTheme = Themes.SlateTheme//darkMode ? DarkThemeCustom: DefaultThemeCustom
  // console.log(DefaultTheme)

  
  
  
  // const theme: Theme = {
  //   ...defaultTheme,
  //   dark: false,
  //   mode: 'adaptive',
  //   roundness:2,
  //   colors: {
      
  //     ...defaultTheme.colors,
  //     primary:'slategray',
  //     accent: 'blue',
  //     surface: 'rgba(33, 34, 41,1)',
  //     text:'white'
  //   },
  // };


  if (!isLoadingComplete || !initalState) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        <StoreProvider initalState={initalState}>
        <PaperProvider theme={defaultTheme}>
          <Navigation  theme={defaultTheme} />
          <StatusBar />
        </PaperProvider>
        </StoreProvider>
      </SafeAreaProvider>
      
    );
  }
}

AppRegistry.registerComponent(expoApp.name, () => App);