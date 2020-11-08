import * as React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions, Platform, Animated } from 'react-native';
import { Text, useTheme, TouchableRipple, List, ActivityIndicator, Surface, Portal, FAB } from 'react-native-paper';
// import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../HeaderBar'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ColumnItem ,{  IColumnItemProps } from './ColumnItem'
import { Content, IContentProps } from './Content';
import { useCollapsibleStack, createCollapsibleStack } from 'react-navigation-collapsible'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


import { feedsByUser, getFeed } from '../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Feed } from '../../../models';
import { useActions, useStore } from '../../common/store';
// import "../../any.jpg"

// "https://some-random-api.ml/img/red_panda",
const picsumImages = new Array(12).fill("2").map((item) => {
  return {
    id: (Math.random()*12313).toString(),
    source:"https://some-random-api.ml/img/red_panda",
  }
})

const paddingBetweenImages = 5;
const screenWidth = Dimensions.get("window").width;

const numColumns = 4;
const screenWidthWithPadding = screenWidth-(paddingBetweenImages*numColumns+20)
const columnWidth = screenWidthWithPadding /numColumns
const tileSize = screenWidthWithPadding / numColumns;
const heightModifier = 1.5;

export interface IFeedProps {
  // feedName: string
  // feedId: string;
  feed: Feed;
  [key:string]: any
}

export default function FeedTab(props: IFeedProps) {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const navigator = useNavigation()
  const store = useStore();
  const actions = useActions();
  const isDrawerOpen = useIsDrawerOpen();
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    console.log("selectedFeed: "+ JSON.stringify(store.selectedFeed?.name))
    console.log("propsFeed: " +JSON.stringify(props.feed.name ))
    if(!store.selectedFeed || store.selectedFeed.id !== props.feed.id){
      // store.dispatch(actions.setSelectedFeed(props.feed))
    }
  },[props.feed.name, store.selectedFeed?.name])

  const [images, setImages] = React.useState(picsumImages);
  const [refreshing, setRefreshing] = React.useState(false);
  const {
    onScroll /* Event handler */,
    onScrollWithListener /* Event handler creator */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
    /* Animated.AnimatedInterpolation by scrolling */
    translateY /* 0.0 ~ -headerHeight */,
    progress /* 0.0 ~ 1.0 */,
    opacity /* 1.0 ~ 0.0 */,
  } = useCollapsibleStack();
  
  const renderItem = ({item, index}) => {
    
    // console.log(JSON.stringify(item))
    return( 
      <ColumnItem  {...item} id={item.id}navigation={props.navigation}  index={index} />
    )
  }
  // console.log("fab props: "+ JSON.stringify(props.feed.name))
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.backdrop}}>
      {/* <HeaderBar/> */}
      <Animated.FlatList
        style={{width: '100%',elevation: 0}}
        // ListHeaderComponent={HeaderBar}
        data={images}
        progressViewOffset={10}
        // onMomentumScrollBegin
        keyboardDismissMode='on-drag'
        renderItem={renderItem}
        // onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        // onEndReached={ (props: {distanceFromEnd: number}) => {
        //   console.log('endReached')
        //   console.log(props.distanceFromEnd)
        //   if(Platform.OS !=='web')//props.distanceFromEnd===0)
        //   {
            
        //     let images2 = images.concat(new Array(24).fill("https://some-random-api.ml/img/dog"))
        //     setImages(images2)
        //   }
        // }}
        onEndReachedThreshold={0.3}
        // onRefresh={() =>setRefreshing(true)}
        // refreshing={refreshing}
        numColumns={numColumns}
        keyExtractor={(item, index)=> index.toString()}>
      </Animated.FlatList>
      <Portal>
    <FAB
      icon="upload"
      visible={isFocused && !isDrawerOpen}
      onPress={() => {
        store.dispatch(actions.setSelectedFeed(props.feed))
        navigator.navigate("Upload", {feed: props.feed.name})
      }}
      style={{
        elevation:5,
        position: 'absolute',
        bottom: 100,
        right: '10%',
      }}
    />
  </Portal>
    </View>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator<TabOneParamList>();
export type FeedParamList = {
  Feed: IFeedProps;
  Content: IContentProps
};
let FeedStack = createSharedElementStackNavigator<FeedParamList>({debug: false, name: 'feedtab'});


export interface IFeedNavigatorProps {
  feed: Feed;
}
export function FeedTabNavigator(props: IFeedNavigatorProps) {
  

  
  // const FeedStack = createStackNavigator<FeedParamList>();
  return (
    <FeedStack.Navigator
      // mode='modal'
      // inital route to be the feed.
      initialRouteName={'Feed'}
      mode="modal"
    
    >
      {/* {createCollapsibleStack( */}
      <FeedStack.Screen
        name={'Feed'}
        component={() => <FeedTab feed={props.feed}/>}
        options={{ headerShown: true,
        header: () => <HeaderBar feed={props.feed}/>,
        headerStyle: styles.feedTab
      }}
      />

      {/* ,{
        elevation: styles.feedTab.elevation,
        header: () => <HeaderBar title={props.name}/>,
      })} */}
      <FeedStack.Screen 
        name='Content'
        component={Content}
        // children={(props: IContentProps) => <Content {...props} />}
        sharedElements={(route, otherRoute, showing) => {
          // console.log("route: " + JSON.stringify(route))
          // console.log("otherroute: " + JSON.stringify(otherRoute))
          const item  = route.params;
          return [item.id/*`${item.id}.photo`*/];
        }}
        // options={{headerShown: false}}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
      />
        
       
    </FeedStack.Navigator>
  );
}



const styles = StyleSheet.create({
  feedTab: {
    width: '100%',
    elevation: 1,
  },
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
