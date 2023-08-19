import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingScreen';
import { View } from 'react-native';
import DrawerNavigation from './DrawerNavigation';
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    
      <Tab.Navigator 
        initialRouteName={homeName} 
        screenOptions={({ route,color }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Overall") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'grey',
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70}
        // }}
       
        >
        
   
        <Tab.Screen  name="Overall" options={{headerShown:false}} component={HomeScreen}  /> 
        <Tab.Screen options={{headerShown:false}} name={detailsName} component={DetailsScreen} />
        <Tab.Screen options={{headerShown:false}} name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>

  );
}

export default MainContainer;
