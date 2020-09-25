
import { useNavigation } from "@react-navigation/native";
import { useTheme, TouchableRipple, Surface, Text } from "react-native-paper";
import {  ActivityIndicator, View, Animated, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

import { SharedElement } from "react-navigation-shared-element";
import { IContentProps } from "./Content";


const paddingBetweenImages = 5;
const screenWidth = Dimensions.get("window").width;

const numColumns = 4;
const screenWidthWithPadding = screenWidth-(paddingBetweenImages*numColumns+20)
const columnWidth = screenWidthWithPadding /numColumns
const tileSize = screenWidthWithPadding / numColumns;
const heightModifier = 1.5;

export interface IColumnItemProps {
    sourceURL: string;
    id: string,
    index: number,
    [key: string]: any,
}
const areEqual = (prevProps: IColumnItemProps, nextProps: IColumnItemProps) => {
    return prevProps.id === nextProps.id && prevProps.index === nextProps.index
}


const ColumnItem = (props:IColumnItemProps) => {
    const [imageUrl, setImageUrl] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [error , setError] = React.useState(false);
    const [elevation, setElevation] = React.useState(new Animated.Value(1));
    const navigator = useNavigation();
    const theme = useTheme()
    // const elevation = new Animated.Value(1)
  
    const animateElevation =
      Animated.timing(elevation, {
        toValue: 4,
        duration: 500,
        useNativeDriver: true,
      })
    
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
        
        navigator.navigate("Content",props)
  
    }
    const gridItemStyle = {
      ...styles.gridItemContainer,
      // backgroundColor: theme.colors.surface,
      // elevation: elevation
    }
    
    // React.useEffect(() => {
    //   handleResponse(props)
    //   // fetch(props.item)
    //   //   .then((response) => response.json())
    //   //   .then((json) => handleResponse(json))
    //   //   .catch((error) => console.error(error))
    //   //   .finally(() => setIsLoading(false));
    // }, [props.sourceURL]);
    if(false){
      return(<Surface style={{...gridItemStyle, elevation: 1 , backgroundColor: theme.colors.backdrop}}>
        <ActivityIndicator style={{...styles.loadingIndicator,elevation: 1}}size='large' />
      </Surface>)
    }
    if(error){
      <View style={{...gridItemStyle, elevation: 1}}>
        <Text>{error}</Text>
      </View>
    }
  console.log("rendering columnItem: "+ props.id)
  return (
    <View style={{borderRadius:0,elevation:0, backgroundColor:theme.colors.backdrop}}>
      <TouchableRipple
        key={props.index}
        style={{borderRadius: theme.roundness}}
        onPress={() => _onPress()}
        // onPressIn={() => animateElevation.start()}
        // onPressOut={() => animateElevation.reset()}
        
        rippleColor="rgba(255,255,255,0.5)">
          {/* <Text style={styles.image}>hi</Text> */}
          
           <Animated.View style={{...gridItemStyle, elevation: elevation}}>
           <SharedElement id={props.id/*`${props.id as string}.photo`*/}> 
        <Image source={ require("../../any.jpg") } style={{...styles.image, borderRadius: theme.roundness}}/>
        </SharedElement>
        </Animated.View>
        
      </TouchableRipple>
    </View>
  )
  }
;


  const styles = StyleSheet.create({
    loadingIndicator: {
      width: columnWidth,
      height: columnWidth *heightModifier,
      justifyContent: "space-around"
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

});

export default React.memo(ColumnItem, areEqual)