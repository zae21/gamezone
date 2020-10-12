import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About'
import Header from '../shared/Header'

const Stack = createStackNavigator();

function AboutStack({navigation}) {
  return (
    // <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#42e3f5',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
          name="About"
          component={About}
          options={{ 
            // title: 'About Game Zone'
            headerTitle : () => <Header navigation={navigation} title='About Game Zone'/>
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default AboutStack;