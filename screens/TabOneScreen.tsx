import * as React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions, Platform } from 'react-native';
import { Text, useTheme, TouchableRipple, List } from 'react-native-paper';
// import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';



const picsumImages = new Array(11).fill("http://placeimg.com/640/360/any")
const paddingBetweenImages = 10;
const screenWidth = Dimensions.get("window").width;

const numColumns = 4;
const screenWidthWithPadding = screenWidth-(paddingBetweenImages*numColumns+1)
const tileSize = screenWidthWithPadding / numColumns;



export default function GalleryTabScreen() {
  const theme = useTheme();
  const [images, setImages] = React.useState(picsumImages);
  console.log("Screenwidth: "+ screenWidth)
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:36}}>23qasdf454</Text>
      <View
            
            style={styles.gridItemContainer}
            // onPress={() => this._onPress(item)}
            // rippleColor="rgb(255,255,255,0.35)"
            >
               <Image source={{uri:"http://placeimg.com/640/360/any" }} style={styles.image}>
                
                </Image>
                               
            
           </View> */}
      {/* <Image source={{uri:"http://placeimg.com/640/360/any" }}style={styles.image}/> */}
      <FlatList
        // ItemSeparatorComponent={({ highlighted }) => (
        //   <View
        //     style={[
        //       styles.separator,

        //     ]}
        //   />
        // )}
        data={images}
        // columnWrapperStyle={{padding: 10}}
        renderItem={({ item, index, separators }) => {
          return (
          <View
            key={index}
            style={styles.gridItemContainer}
            // onPress={() => this._onPress(item)}
            // rippleColor="rgb(255,255,255,0.5)"
            >
             
               <Image key={index} source={{uri: item}} style={styles.image}>
                
                </Image>
             
            
           </View>
          )}}
        numColumns={4}
        keyExtractor={(item, index)=> index.toString()}>
      </FlatList>
    </View>
  );
}


const getData =() => {
  let dataArray = []
  for (let i = 0; i < 30; i++) {
    dataArray.push(i);
    
  }
  return dataArray;
}

const styles = StyleSheet.create({
  image: {
    width: tileSize,
    height: tileSize,
    aspectRatio: 1,
    flex:1 ,/// numColumns,
    resizeMode: "cover",
    borderRadius:5
  },
  gridItemContainer: {
    // height: tileSize,
    width: 'auto',
    padding:paddingBetweenImages,
    aspectRatio: 1,
    flex:1,
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  List : {
    width: '200px'
  }
});
