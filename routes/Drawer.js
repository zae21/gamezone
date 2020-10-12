import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const DrawerStack = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator initialRouteName="Home">
        <DrawerStack.Screen name="Home" component={HomeStack} />
        <DrawerStack.Screen name="About" component={AboutStack} />
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
}