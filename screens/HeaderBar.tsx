import * as React from 'react';
import { Appbar, useTheme, Title } from 'react-native-paper';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { useSafeAreaInsets, EdgeInsets, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

const NAVBAR_HEIGHT = '7%'

interface IHeaderBarProps {
    navbarHeight?: string | number;
    title: string,
}
// const height = Dimensions.get('window').height
// console.log(NAVBAR_HEIGHT/height)
const MyComponent = (props: IHeaderBarProps) => {
    const navigator = useNavigation();
    
    const _goBack = () => navigator.dispatch(DrawerActions.openDrawer());

    const _handleSearch = () => {
        navigator.navigate("Upload")
        console.log("pressed upload")
    };
    
  
    const _handleMore = () => console.log('Shown more');
    const isDrawerOpen = useIsDrawerOpen();
    const insets = useSafeAreaInsets();
    const theme = useTheme()
    const styles = useStyles(insets, props.navbarHeight ? props.navbarHeight: NAVBAR_HEIGHT)
    // console.log('surface color: ' + theme.colors.surface)
    return (
<SafeAreaView >
        <StatusBar backgroundColor={theme.colors.surface} barStyle={theme.dark? "light-content": "dark-content"} hidden={false} showHideTransition='slide' translucent={true}/>
            <Appbar style={{...styles.bottom,}} >
                <Appbar.Action icon={isDrawerOpen ? 'arrow-collapse-left' :'menu'}  onPress={_goBack} />
                <Appbar.Content  title={props.title} subtitle="Subtitle" />
                <Appbar.Action icon="upload"  onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar>
  </SafeAreaView>      
    );
}
export default MyComponent

const useStyles = (insets:EdgeInsets, navbarHeight: string| number) => {
    return StyleSheet.create({
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        height: navbarHeight,
        justifyContent: 'center',
        paddingTop: insets.top,
      },
    bottom: {
        width: '100%',
        elevation:14,
        // height: NAVBAR_HEIGHT
        // paddingTop: insets.top,
        // height: 0
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // bottom: 0,
    },
});
}