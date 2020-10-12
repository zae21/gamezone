import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { button } from '../styles/Global.css';

export default function FlatButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={button.wrap}>
                <Text style={button.text}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}
