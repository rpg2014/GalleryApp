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



enableScreens();

// LightMode {
//   "animation": Object {
//     "scale": 1,
//   },
//   "colors": Object {
//     "accent": "#03dac4",
//     "backdrop": "rgba(0, 0, 0, 0.5)",
//     "background": "#f6f6f6",
//     "disabled": "rgba(0, 0, 0, 0.26)",
//     "error": "#B00020",
//     "notification": "#f50057",
//     "onBackground": "#000000",
//     "onSurface": "#000000",
//     "placeholder": "rgba(0, 0, 0, 0.54)",
//     "primary": "#6200ee",
//     "surface": "#ffffff",
//     "text": "#000000",
//   },
//   "dark": false,
//   "fonts": Object {
//     "light": Object {
//       "fontFamily": "sans-serif-light",
//       "fontWeight": "normal",
//     },
//     "medium": Object {
//       "fontFamily": "sans-serif-medium",
//       "fontWeight": "normal",
//     },

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useTheme();
  const [darkMode, setDarkMode] = React.useState(false);
  const defaultTheme = darkMode ? DarkTheme: DefaultTheme
  // console.log(DefaultTheme)


  const theme: Theme = {
    ...defaultTheme,
    dark: false,
    mode: 'adaptive',
    roundness:2,
    colors: {
      
      ...defaultTheme.colors,
      primary:'slategray',
      accent: 'blue',
      surface: 'rgba(33, 34, 41,1)',
      text:'white'
    },
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        
        <PaperProvider theme={theme}>
          <Navigation  theme={theme} />
          <StatusBar />
        </PaperProvider>
        
      </SafeAreaProvider>
      
    );
  }
}

AppRegistry.registerComponent(expoApp.name, () => App);