import React, {useState} from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack'; //네비게이션 스택을 import하여 불러옴

const cacheImages = images => 
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
});

const cacheFonts = fonts => 
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)])

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
    "https://images.unsplash.com/photo-1632447571135-cac9fb2f35cf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    require("./assets/splash.png")
  ]);
  const fonts = cacheFonts([Ionicons.font]);
  return Promise.all([...images, ...fonts]);
};
  const onFinish = () => setIsReady(true);
  return isReady ? ( 
    <>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
    <StatusBar barStyle= "light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets} 
      onFinish={onFinish} 
      onError={console.error} 
    />
  );
}


