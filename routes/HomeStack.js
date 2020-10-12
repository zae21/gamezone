import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home'
import ReviewDetail from '../components/ReviewDetail'
import Header from '../shared/Header'

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    // <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#42e3f5',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerLeft: () => (
          //   <Button
          //     onPress={() => navigation.toggleDrawer() }
          //     title="Menu"
          //     // color="#fff"
          //   />
          // ),
        }}>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            // title: 'Game Zone',
            // headerStyle:{backgroundColor:'magenta'}
            headerTitle : () => <Header navigation={navigation} title='Game Zone'/>
          }}
        />
        <Stack.Screen 
          name="ReviewDetail" 
          component={ReviewDetail} 
          options={
            ({ route }) => ({ 
              title: route.params.title
            })
          }
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default HomeStack;