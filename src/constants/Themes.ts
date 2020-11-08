import { Theme } from "react-native-paper/lib/typescript/src/types";

import { Theme as NativeTheme } from "@react-navigation/native/lib/typescript/src/types";

import { DefaultTheme, DarkTheme } from "react-native-paper";



export const DarkThemeCustom: Theme & NativeTheme = {
    ...DarkTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
        ...DarkTheme.colors,
        primary: 'slategrey',//'#BB86FC',
        accent: '#03dac6',
        background: '#121212',
        surface: '#121212',
        error: '#CF6679',
        onBackground: '#FFFFFF',
        onSurface: '#FFFFFF',
        text: "lightgrey", //white

        notification: "#ff80ab",

        card: "#121212",
        border: 'slategrey',
    },
};

export const SlateTheme: Theme & NativeTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkThemeCustom.colors,
        primary: "#95B2B8",
        accent: "#F1AB86",
        background: "#141414",
        // surface: "#5E6156",
        surface: "#393B35",
        text: "#D4D6B9",
        onSurface: "#C57B57",
        onBackground: '#FFFFFF',

        card: "#5E6156",
        border: "#95B2B8"
    }
}

export const DefaultThemeCustom: Theme & NativeTheme = {
    ...DefaultTheme,
    dark: false,
    roundness: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        backdrop: "white",
        surface: "white",
        error: '#B00020',
        text: "black",
        onBackground: '#000000',
        onSurface: '#000000',

        notification: "#f50057",

        card: "white" ,//same as surface,
        border: "#6200ee" // same as primary
    },

    animation: {
        scale: 1.0,
    },
};

export default  {DarkThemeCustom, SlateTheme, DefaultThemeCustom, DarkTheme, DefaultTheme}


