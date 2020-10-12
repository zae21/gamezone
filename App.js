import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { app } from './styles/Global.css';
import Navigation from './routes/Drawer'

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'comic-reguler' : require('./assets/fonts/Comic-Reguler.ttf'),
    'comic-bold' : require('./assets/fonts/Comic-Bold.ttf'),
    'comic-italic' : require('./assets/fonts/Comic-Italic.ttf'),
  })

  if(fontsLoaded){
    return (
      <View style={app.wrapper}>
        <Navigation />
      </View>
    )  
  } else {
    return (
      <AppLoading />
    )
  }
}
