import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { card } from '../styles/Global.css';

export default function Card(props) {
    return (
        <View style={card.card}>
            <View style={card.cardContent}>
                {props.children}
            </View>
        </View>
    )
}
