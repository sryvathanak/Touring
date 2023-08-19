//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//import { Icon } from 'react-native-vector-icons/Icon';
import React from 'react';
//import Ionic from 'react-native-vector-icons/Ionicons'
//import MainContainer from './navigation/MainContainer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Order from './detail/Order'
 //import MainContainer from './navigation/MainContainer';
import Login from './Authorization/Login';
const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Authorization/Register';
//import MainContainer from './navigation/MainContainer';
import ForgetPassword from './Authorization/ForgetPassword';
//import DrawerNavigation from './navigation/DrawerNavigation';
import MainNavigator from './MainNavigation';
//import { createRef } from 'react';
import ActivityIndicatorExample from './Authorization/ActivityIndi';
//import MainNavigator from './MainNavigation';
export default function App() {
  return (
  // <MainContainer /> 
  //   <NavigationContainer>
  //   <Drawer.Navigator initialRouteName='Home'>
  //      <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
  //      <Drawer.Screen name='Setting' component={SettingScreen}></Drawer.Screen>
      
  //  </Drawer.Navigator>
  
   //</NavigationContainer>
   <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen  name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='MainNavigation'  component={MainNavigator}/>
      <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
      <Stack.Screen name='Activity' component={ActivityIndicatorExample}/>
      <Stack.Screen name='Order' component={Order} />
    </Stack.Navigator>
   
   </NavigationContainer>
   // <Stack.Screen name='Drawer' component={DrawerNavigation} />
 // <MainNavigator />
  
   );
}
