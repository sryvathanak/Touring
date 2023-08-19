import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import ActivityIndicatorExample from "./ActivityIndi";
//import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Image } from "react-native";

//export const IMAGENAME = require('../image/user.png'); 
export default function Login(){
  const navigator=useNavigation();

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{

      if(username==="admin" && password==="admin@123"){
     
           navigator.navigate('Activity')
        
      }else
      {
        alert("Username Or Password Wrong!")
      }
  }
    return(
        <View style={styles.container}>
            
             <Image source={require('../assets/user.png')} />
            <TextInput  placeholder="Username" style={styles.username} value={username}   onChangeText={(text)=>setUsername(text)} ></TextInput>
            <TextInput  placeholder="Password" style={styles.username} value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleLogin}
          
            
            >
                     <Text>Login</Text>
                   
             </TouchableOpacity>
             <Text style={styles.forgetPassword} onPress={()=>navigator.navigate('ForgetPassword')}>forget password!</Text>
             <Text style={styles.register} onPress={()=>navigator.navigate('Register')}>Create Account</Text>

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
            color:'blue',
            
          }

   }
)