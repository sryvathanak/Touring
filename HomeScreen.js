import React from "react";
import { View, Text } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import GridProduct from "./GridProduct";
import Example from "./FlatGrid";
import FlexBox from "./FlexBox";
export default function HomeScreen() {
    return (
        // <View style={styles.container}>

        //     <View style={styles.product}>
        //         <TouchableOpacity onPress={() => alert("hi")}>
        //             <Image source={require('./assets/hotel.png')} style={styles.box} />
        //             <Text>Hotel</Text>
        //         </TouchableOpacity>
        //     </View>
        //     <View style={styles.product}>
        //         <Image source={require('./assets/bus.png')} onPress={() => alert("gggg")} />
        //         <Text>Bus</Text>
        //     </View>
        //     <View style={styles.product}>
        //         <Image source={require('./assets/airplan.png')} />
        //     </View>
        // </View>
       //<GridProduct />
      // <Example/>
      <FlexBox/>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_modal: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning_button: {
        backgroundColor: '#00ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: 150,
        height: 150,
        margin: 10,
    },
    product: {
        marginTop: 30,
        padding: 50,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1,
        borderColor: "#fff",
        maxWidth: "20%", // 100% devided by the number of rows you want
        alignItems: "center",
    },
    container: {
        // justifyContent:'space-evenly',
        //   flexDirection: 'row',
        //   flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',


       

        // my visual styles; not important for the grid
        

        backgroundColor: 'steelblue',
        height: '100%'
    },
    box: {

    }
});