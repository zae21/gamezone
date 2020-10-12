import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { global, review, images } from '../styles/Global.css';
import Card from '../shared/Card'

export default function ReviewDetail({ route, navigation }) {
  const {title, body, rating} = route.params;

  return (
    <ImageBackground source={require('../assets/game_bg.png')}  style={global.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View styke={review.rating}>
          <Text>Game Rating :</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </ImageBackground>
  )
}