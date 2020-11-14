import * as React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions, Platform, Animated, InteractionManager } from 'react-native';
import { Text, useTheme, TouchableRipple, List, ActivityIndicator, Surface, Portal, FAB } from 'react-native-paper';
// import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../HeaderBar'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ColumnItem, { IColumnItemProps } from './ColumnItem'
import { GraphQLResult } from "@aws-amplify/api";
import { Content, IContentProps } from './Content';
import { useCollapsibleStack, createCollapsibleStack } from 'react-navigation-collapsible'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


import { feedsByUser, getFeed, postsByFeed } from '../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Feed, Post } from '../../../models';
import { useActions, useStore } from '../../common/store';
import { updateUser } from '../../../graphql/mutations';
import { PostsByFeedQuery, PostsByFeedQueryVariables, UpdateUserMutation, UpdateUserMutationVariables } from '../../API';
import { convertPostByFeed, convertUserQueryToUser } from '../../common/common';
// import "../../any.jpg"

// "https://some-random-api.ml/img/red_panda",
const picsumImages = new Array(12).fill("2").map((item) => {
  return {
    id: (Math.random() * 12313).toString(),
    source: "https://some-random-api.ml/img/red_panda",
  }
})

const paddingBetweenImages = 5;
const screenWidth = Dimensions.get("window").width;

const numColumns = 4;
const screenWidthWithPadding = screenWidth - (paddingBetweenImages * numColumns + 20)
const columnWidth = screenWidthWithPadding / numColumns
const tileSize = screenWidthWithPadding / numColumns;
const heightModifier = 1.5;

export interface IFeedProps {
  // feedName: string
  // feedId: string;
  feed: Feed;
  [key: string]: any
}

export default function FeedTab(props: IFeedProps) {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const navigator = useNavigation()
  const store = useStore();
  const actions = useActions();
  const isDrawerOpen = useIsDrawerOpen();

  const [isLoading, setIsLoading] = React.useState(false)
  const [hydrated, setHydrated] = React.useState(false)
  const [fabOpen, setFabOpen] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[] | null | undefined>(props.feed.posts ? props.feed.posts : []);
  // const [refreshing, setRefreshing] = React.useState(false);
  const [nextToken, setNextToken ] = React.useState<string|null>();
  const [errors, setErrors] = React.useState<string[]>()

  const onFABStateChange = ({ open }: {open: boolean}) => setFabOpen(open);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        // console.log("mounting "+ props.feed.name + ", " + store.selectedFeed?.name)
        if (!store.selectedFeed || props.feed.id !== store.selectedFeed?.id) {
          console.log("setting feed")
          store.dispatch(actions.setSelectedFeedAction(props.feed))
        }
      });
      return () => task.cancel();
    }, [props.feed.id])
  )
  
  //see if feed is in feed map in store, then fetch to update.  
  useFocusEffect(
    React.useCallback(() => {
      
      const setFetchAndUpdatePostsForFeed = async () => {
        console.log("feedId: " + props.feed.id.toString())
        console.log("hydrated: " + hydrated)
        if (store.postsByFeed.has(props.feed.id)) {
          setPosts(store.postsByFeed.get(props.feed.id));
        }
        //fetch posts by feed 
        const postByFeedQV: PostsByFeedQueryVariables = {
          feedID: props.feed.id,
          limit: 20,
        }
        if (!hydrated) {
          console.log("hydrating")
          // const response = await API.graphql(graphqlOperation(postsByFeed, postByFeedQV)) as GraphQLResult<PostsByFeedQuery>
          const response = {
            data: {
              postsByFeed: {
                __typeName: "ModelPostConnection",
                nextToken: "next token",
                items: null
              }
            },
            errors: undefined
          };
          
          if (response.errors) {
            console.log("errors: " + JSON.stringify(response.errors))
            setErrors(response.errors)
          }
          if (response.data && response.data.postsByFeed) {
            setNextToken(response.data.postsByFeed.nextToken)
            const posts: Post[] = convertPostByFeed(response.data)
            console.log("posts: " + JSON.stringify(posts))
            // setIsLoading(true)
            // setPosts(posts);
            store.dispatch(actions.setPostsByFeed(store.postsByFeed.set(props.feed.id, posts)))
            
          }
          console.log("setting true")
          setHydrated(true)
        }
      }
      const task = InteractionManager.runAfterInteractions(async () => {
      // if ( props.feed.name!=="Test" && !hydrated) {
      //   await setFetchAndUpdatePostsForFeed();
      //   setHydrated(true)
      // }
    
      })
      return () => task.cancel();
    }, [props.feed.id])
  )
  console.log(isDrawerOpen);
  
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

  const renderItem = ({ item, index }: {item: Post, index: number}) => {

    // console.log(JSON.stringify(item))
    return (
      <ColumnItem  sourceURL={item.content} id={item.id} navigation={props.navigation} index={index} />
    )
  }

  // if (!posts || posts.length === 0) {
  //   return (<View style={{  backgroundColor: theme.colors.backdrop }}>
  //   <Text style={styles.title}>No Posts</Text>
  //   </View>)
  // }
  // console.log("fab props: "+ JSON.stringify(props.feed.name))
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.backdrop }}>
      {/* <HeaderBar/> */}
      <Animated.FlatList
        style={{ width: '100%', elevation: 0 }}
        // ListHeaderComponent={HeaderBar}
        data={posts}
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
        keyExtractor={(item, index) => index.toString()}>
      </Animated.FlatList>
      <Portal>
        <FAB //.Group
          // open={fabOpen}
          // onStateChange={onFABStateChange}
          icon={"upload"}//fabOpen ? 'calendar-today' : 'plus'}
          visible={isFocused && !isDrawerOpen}
          //reenable if i move the remove feed button
          onPress={() => {
            // store.dispatch(actions.setSelectedFeed(props.feed))
            navigator.navigate("Upload", { feed: props.feed.name })
          }}
          style={{
            elevation: 5,
            position: 'absolute',
            bottom: 100,
            right: '10%',
          }}
          // actions= {[
          //   {
          //     icon: 'upload',
          //     onPress: () => {
          //       // store.dispatch(actions.setSelectedFeed(props.feed))
          //       navigator.navigate("Upload", { feed: props.feed.name })
          //     }
          //   },
          //   {
          //     icon: 'link-variant-off',
          //     onPress: () => {
          //         const removeFeed = async () => {
          //           const updateUserMV: UpdateUserMutationVariables ={input: {
          //             id: store.user.id,
          //             feedIDs: store.user.feedIDs?.filter(s => s!==props.feed.id)
          //           }}
          //           const response = await API.graphql(graphqlOperation( updateUser, updateUserMV )) as GraphQLResponse<UpdateUserMutation>
          //           console.log(response)
          //           if (response.errors) {
          //             console.log("ERROR: " + JSON.stringify(response.errors))
          //         }
          //         if (response.data && response.data.updateUser) {
          //             store.dispatch({ type: "SET_USER", data: convertUserQueryToUser(response.data.updateUser) })
          //             if(store.user.feedIDs && store.user.feedIDs.length <=1){
          //               navigator.navigate("CreateFeed")
          //             }
          //         }
          //         }
          //         removeFeed();
          //     }
          //   }
          // ]}
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
let FeedStack = createSharedElementStackNavigator<FeedParamList>({ debug: false, name: 'feedtab' });


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
        component={() => <FeedTab feed={props.feed} />}
        options={{
          headerShown: true,
          header: () => <HeaderBar title={props.feed.name} subTitle={props.feed.user && props.feed.user.name ? `Created By: ${props.feed.user?.name}` : ""} />,
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
          const item = route.params;
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
    height: columnWidth * heightModifier,
    justifyContent: "space-around"
  },
  greyBackground: {
    backgroundColor: 'rgba(33, 34, 41,1)'
  },
  image: {
    width: columnWidth,
    height: columnWidth * heightModifier,
    resizeMode: "cover",

    borderRadius: 3,

  },
  gridItemContainer: {
    // height: tileSize,
    // width: 'auto',
    margin: paddingBetweenImages,
    // aspectRatio: 1,
    // flex:1,
    // elevation: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    elevation: 1,
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
  List: {
    width: '200px'
  }
});
