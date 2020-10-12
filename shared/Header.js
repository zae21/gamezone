import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { header } from '../styles/Global.css'

export default function Header({ navigation, title }) {
    const openMenu = () =>{
        navigation.openDrawer();
    }
  return (
    <View style={header.header}>
        <MaterialIcons
            name='menu'
            size={28}
            onPress={openMenu}
            style={header.icon}
        />
        <View style={header.headerTitle}>
            <Image source={require('../assets/heart_logo.png')} style={header.headerImage}/>
            <Text style={header.headerText}>{title}</Text> 
        </View>
    </View>
  )
}
