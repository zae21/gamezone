import React from 'react';
import { View, ImageBackground } from 'react-native';
import { global } from '../styles/Global.css';

export default function About() {
  return (
      <ImageBackground source={require('../assets/game_bg.png')} style={global.container}>
        <View>
          
        </View>
      </ImageBackground>
  )
}