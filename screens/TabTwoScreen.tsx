import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, TextInput, Searchbar, useTheme, Button, Surface, Divider, Snackbar } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import { Ionicons } from '@expo/vector-icons';
// import { Icon } from 'react-native-paper/lib/typescript/src/components/List/List';

// import { View } from '../components/Themed';

export default function UploadScreen() {
  const [urlToUpload, setUrlToUpload] = React.useState('');
  const [feedToUploadTo, setFeedToUploadTo] = React.useState("Java");

  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);

  const onDismissSnackBar = () => setSnackbarVisible(false);
  const theme = useTheme();
  const onChangeURL = (query:string) => setUrlToUpload(query);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new thing to a feed</Text>
      
      <Divider style={styles.separator} />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {/* <Surface style={{elevation: }}> */}
      <Picker 
      mode='dropdown'
      style={{
        ...styles.textInput,
          backgroundColor: theme.colors.surface,
          // width: '50%',
          marginBottom: 10,
          elevation: 2,
          borderRadius: theme.roundness
          // height: '10%'
        }}
      itemStyle= {{
        backgroundColor: theme.colors.surface,
        color: 'red'//theme.colors.onSurface,
        
      }}
      onValueChange={(itemValue: any, itemIndex:number) => {
        setFeedToUploadTo(itemValue);
      }}
      selectedValue={feedToUploadTo}
      prompt='Feed'
      >
        <Picker.Item  label="Java" value="java"  />
        
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      {/* </Surface> */}
      

      <TextInput mode='flat'
        label='URL'
        placeholder='URL To UPLOAD'
        dense={true}

        style={styles.textInput}
        onChangeText={onChangeURL}
        // icon='upload'
        value={urlToUpload}
        right={<TextInput.Icon  name='upload' disabled  color={theme.colors.accent} centered={true}/>}
        //TODO: add input mask below for Http 
        />
        
        
        {/* <View style={styles.seperator}/> */}
        <Divider style={{...styles.separator, width: '70%', marginVertical: 25}}/>
        <Button mode='contained'
        icon='arrow-right'
        style={{ elevation: 2}}
        onPress={() => onToggleSnackBar()}
        >
          Add to {feedToUploadTo}
        </Button>
        

        <Snackbar
        visible={snackbarVisible}
        style={{elevation: 6}}
        onDismiss={onDismissSnackBar}
        duration={2000}
        // action={{
        //   label: 'Undo',
        //   onPress: () => {
        //     // Do something
        //   },
        // }}>
        >
        Upload button pressed!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    // height: '10%',
    width: '65%',
    elevation:2,
    
  }
});
