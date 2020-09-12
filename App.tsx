import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme, useTheme } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import { expo as expoApp } from './app.json';
import Navigation from './navigation';
import { AppRegistry } from 'react-native';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    
    ...DefaultTheme.colors,
    primary:'red',
    accent: 'yellow',
    text:'white'
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useTheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        
        <PaperProvider theme={theme}>
          <Navigation  />
          <StatusBar />
        </PaperProvider>
        
      </SafeAreaProvider>
      
    );
  }
}

AppRegistry.registerComponent(expoApp.name, () => App);