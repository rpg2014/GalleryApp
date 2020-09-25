import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider,  useTheme, DarkTheme, DefaultTheme } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import { expo as expoApp } from './app.json';
import Navigation from './navigation';
import { AppRegistry } from 'react-native';
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import Themes, { DarkThemeCustom, DefaultThemeCustom, SlateTheme } from './constants/Themes';



enableScreens();



export default function App() {
  const isLoadingComplete = useCachedResources();
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
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        
        <PaperProvider theme={defaultTheme}>
          <Navigation  theme={defaultTheme} />
          <StatusBar />
        </PaperProvider>
        
      </SafeAreaProvider>
      
    );
  }
}

AppRegistry.registerComponent(expoApp.name, () => App);