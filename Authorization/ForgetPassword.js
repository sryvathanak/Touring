import React from "react";
import { TouchableOpacity } from "react-native";
import { TextInput,Image } from "react-native";
import { View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function ForgetPassword(){
    const navigator=useNavigation();

    const handleSave=()=>{
        navigator.navigate('Login')
    }
    return(
        <View style={styles.container}>
             <Image source={require('../assets/password.png')} />
           
            <TextInput  placeholder="Email" style={styles.username}></TextInput>
            <TextInput  placeholder="New Password" style={styles.username} secureTextEntry={true}></TextInput>
            <TextInput  placeholder="Confirm Password" style={styles.username} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                     <Text>Save</Text>
             </TouchableOpacity>
            
             

        </View>
    );
}

const styles=StyleSheet.create(
   {
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    user:{
        fontSize:50,
        
    },
    username:{
        
            height: 40,
            margin: 12,
            borderWidth: 1 ,
            padding: 10,
            width:300,
            borderRadius:10,
            fontSize:20,
         },
         button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width:200,
            borderRadius:15
          },
          forgetPassword:{
            padding:10,
            color:'blue'
          },
          register:{
           padding:10
            
          }

   }
)



