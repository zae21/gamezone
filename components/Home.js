import React, {useState} from 'react';
import { View, Text, FlatList, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'
import { global, home } from '../styles/Global.css';
import Card from '../shared/Card'
import FormReview from '../components/FormReview'

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false)

  const [reviews, setReviews] = useState([
    { key: '1', title: 'Zelda, Breath of Fresh Air', rating:5, body: 'lorem ipsum'},
    { key: '2', title: 'Gotta Catch Them All (again)', rating:4, body: 'lorem ipsum'},
    { key: '3', title: 'Not So "Final" Fantasy', rating:3, body: 'lorem ipsum'},
  ])

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [...currentReviews, review]
    })
    setShowModal(false)
  }

  return (
      <ImageBackground source={require('../assets/game_bg.png')} style={global.container}>
        <Modal visible={showModal} animationType='slide'>
          <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={home.modalContent}>
              <MaterialIcons name='close' size={24} onPress={()=>setShowModal(false)} style={{...home.modalToggle, ...home.modalClose}} />
              <FormReview addReview={addReview}/>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons name='add' size={24} onPress={()=>setShowModal(true)} style={home.modalToggle} />

        <FlatList 
          data={reviews}
          renderItem={({ item })=>(
            <TouchableOpacity onPress={()=> (navigation.navigate('ReviewDetail', item))}>
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
  )
}
