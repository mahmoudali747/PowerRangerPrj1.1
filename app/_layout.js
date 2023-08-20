import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    const onLayoutRootView = useCallback (async () =>{
          
    })

    return <Stack onLayout={onLayoutRootView}/> ;
}

export default Layout ;