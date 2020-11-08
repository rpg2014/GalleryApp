import { View, StyleSheet, Image } from "react-native"
import { Route, RouteProp, useRoute } from "@react-navigation/native"
import {Text } from 'react-native-paper'
import { FeedParamList } from "./FeedTab"
import React from 'react';

import { SharedElement } from "react-navigation-shared-element";

type IContentType = 'image' 

export interface IContentProps {
    type?: IContentType;
    sourceURL?: URL;

    // navigation: any;
    id: string
}


//Switch to use ViewPager from expo https://docs.expo.io/versions/v39.0.0/sdk/view-pager/
export const Content = (props: IContentProps) => {
    
    const route: any = useRoute();
    const styles = useStyles();
    const item = route.params
    // console.log('rendering content' + JSON.stringify(props))
    // console.log('contentId: ' + route.params?.id)

    return (
        <View style={styles.container}>
            
            <SharedElement id={item.id/*`${item.id as string}.photo`*/}>
            <View>
                <Image source={ require("../../../any.jpg") } style={styles.image}>
        
                </Image>
                </View>
            </SharedElement>
            
        </View>
    )
}

// Content.sharedElements = (route, otherRoute, showing) => {
//     const { item } = route.params;
//     return ['test'/*`${item.id as string}.photo`*/];
//   }

const useStyles= () => StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        width: '90%',
        height: '90%',
        
        
    }
})