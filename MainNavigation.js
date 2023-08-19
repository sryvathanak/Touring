import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
//import Ionic from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import DrawerContent from './DrawerContent';
import DetailsScreen from './navigation/Screens/DetailsScreen';
import { View } from 'react-native';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#c6cbef',
      
    },
    headerStyle: {
      backgroundColor: 'c6cbef'
    }
  }}

  >
    <Tab.Screen
      name="Home Page"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => (

  <Drawer.Navigator

  
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
        
      },
      
      headerStyle: {
        backgroundColor: '#c6cbef',
       
       
      },
     

    }}

    drawerContent={props => <DrawerContent {...props} />}   >
    <Drawer.Screen
      name="Home" component={BottomTabNavigator}
      options={{
        title: 'Home Page',
       
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'black'
        ,
        headerTitleStyle: {
          color: '#fff',
         
          // use your preferred color code
        },
        drawerIcon: ({ focused, size }) => (
          <AntDesign name="home" color={focused ? '#c6cbef' : 'yellow'} size={size} />
        ),
      }}

    />
    <Drawer.Screen name='Detail' component={DetailsScreen}


      options={{
        title: 'Detail',

        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'black'
        ,
        drawerIcon: ({ focused, size }) => (
          <AntDesign name="profile" color={focused ? '#c6cbef' : 'yellow'} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>

);

export default MainNavigator;
