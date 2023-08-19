import React from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Register(){
    const navigator=useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.boderStyle}>
            <Image source={require('../assets/sign-up.png')} />
            <TextInput  placeholder="First Name" style={styles.username}></TextInput>
            <TextInput  placeholder="Last Name" style={styles.username}></TextInput>
            <TextInput  placeholder="Username" style={styles.username}></TextInput>
            <TextInput  placeholder="Email" style={styles.username}></TextInput>
            <TextInput  placeholder="Password" style={styles.username}></TextInput>
            <TouchableOpacity style={styles.button} >
                     <Text>Register</Text>
             </TouchableOpacity>
            
             <Text style={styles.register} onPress={()=>navigator.navigate('Login')}>Back Login 
                 <FontAwesome name="arrow-right" style={styles.back} />
             </Text>

            </View>
            
        </View>
    );
}

const styles=StyleSheet.create(
   {
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        display:'flex',
        
    },
    boderStyle:{
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
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



