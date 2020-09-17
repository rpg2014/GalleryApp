import * as React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions, Platform } from 'react-native';
import { Text, useTheme, TouchableRipple, List, ActivityIndicator, Surface } from 'react-native-paper';
// import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../HeaderBar'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
// import "../../any.jpg"


const picsumImages = new Array(32).fill("https://some-random-api.ml/img/red_panda")
const paddingBetweenImages = 5;
const screenWidth = Dimensions.get("window").width;

const numColumns = 4;
const screenWidthWithPadding = screenWidth-(paddingBetweenImages*numColumns+20)
const columnWidth = screenWidthWithPadding /numColumns
const tileSize = screenWidthWithPadding / numColumns;
const heightModifier = 1.5;



export default function GalleryTabScreen() {
  const theme = useTheme();
  
  const [images, setImages] = React.useState(picsumImages);
  const [refreshing, setRefreshing] = React.useState(false);
  

  console.log("Screenwidth: "+ screenWidth)
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.backdrop}}>
      {/* <HeaderBar/> */}
      <FlatList
        style={{width: '100%',elevation: 0}}
        // ListHeaderComponent={HeaderBar}
        data={images}
        progressViewOffset={10}
        // onMomentumScrollBegin
        keyboardDismissMode='on-drag'
        renderItem={urlToGetImage => <ColumnItem  {...urlToGetImage} />}
        onEndReached={ (props: {distanceFromEnd: number}) => {
          console.log('endReached')
          console.log(props.distanceFromEnd)
          if(Platform.OS !=='web')//props.distanceFromEnd===0)
          {
            
            let images2 = images.concat(new Array(24).fill("https://some-random-api.ml/img/dog"))
            setImages(images2)
          }
        }}
        onEndReachedThreshold={0.3}
        // onRefresh={() =>setRefreshing(true)}
        // refreshing={refreshing}
        numColumns={numColumns}
        keyExtractor={(item, index)=> index.toString()}>
      </FlatList>
    </View>
  );
}


const ColumnItem = React.memo((props: {item:any, index: number}) => {
  const [imageUrl, setImageUrl] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error , setError] = React.useState(false);
  const [elevation, setElevation] = React.useState(1);
  const theme = useTheme()
  const handleResponse = (json) => {
    if(json.error) {
      // setError(json.error)
    }
    if(json.link) {
      
    }
    setIsLoading(false)
    setImageUrl(require("../../any.jpg"))
  }
  const _onPress = () => {
      setElevation(8)
  }
  const gridItemStyle = {
    ...styles.gridItemContainer,
    // backgroundColor: theme.colors.surface,
    elevation: elevation
  }
  
  React.useEffect(() => {
    handleResponse({})
    // fetch(props.item)
    //   .then((response) => response.json())
    //   .then((json) => handleResponse(json))
    //   .catch((error) => console.error(error))
    //   .finally(() => setIsLoading(false));
  }, []);
  if(isLoading){
    return(<Surface style={{...gridItemStyle, elevation: elevation , backgroundColor: theme.colors.backdrop}}>
      <ActivityIndicator style={{...styles.loadingIndicator,elevation: elevation}}size='large' />
    </Surface>)
  }
  if(error){
    <View style={gridItemStyle}>
      <Text>{error}</Text>
    </View>
  }
// console.log("elevation: "+ elevation)
return (
  <View style={{borderRadius:0,elevation:0, backgroundColor:theme.colors.backdrop}}>
    <TouchableRipple
      key={props.index}
      style={{borderRadius:3}}
      onPress={() => _onPress()}
      
      rippleColor="rgba(255,255,255,0.5)">
        {/* <Text style={styles.image}>hi</Text> */}
        <Surface style={{...gridItemStyle, elevation:elevation}}>
      <Image source={ imageUrl } style={{...styles.image}}/>
      </Surface>
    </TouchableRipple>
  </View>
)
})




const styles = StyleSheet.create({
  loadingIndicator: {
    width: columnWidth,
    height: columnWidth *heightModifier,
    justifyContent: "space-around"
  },
  greyBackground: {
    backgroundColor: 'rgba(33, 34, 41,1)'
  },
  image: {
    width: columnWidth,
    height:columnWidth*heightModifier,
    resizeMode: "cover",
    
    borderRadius: 3,
    
  },
  gridItemContainer: {
    // height: tileSize,
    // width: 'auto',
    margin:paddingBetweenImages,
    // aspectRatio: 1,
    // flex:1,
    // elevation: 2,
    borderRadius:3,
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    elevation:1,
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
