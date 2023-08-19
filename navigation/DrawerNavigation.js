import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import SettingScreen from "./Screens/SettingScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainContainer from "./MainContainer";

const Drawer=createDrawerNavigator();
export default function DrawerNavigation(){
    return(
        <Drawer.Navigator initialRouteName='Home' drawerPosition="right" >
              <Drawer.Screen  name='Home' component={MainContainer}></Drawer.Screen>
              <Drawer.Screen  name='Setting' component={SettingScreen}></Drawer.Screen>
            
      </Drawer.Navigator>
    )
}