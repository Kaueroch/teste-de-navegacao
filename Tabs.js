import { View, Text } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Settings from './Settings';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
const Tab = createBottomTabNavigator();
<NavigationContainer> 
<Tab.Navigator> 
  <Tab.Screen name='Home' component={Home} />
  <Tab.Screen name='Search' component={Search}/>
  </Tab.Navigator>
 </NavigationContainer>
  )
}