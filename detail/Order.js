// import React from "react";
// import { View, Text, Image,TouchableOpacity } from "react-native";
// import { StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { ScrollView } from "react-native-gesture-handler";
// export default function Order() {
//     const navigator = useNavigation();
//     const handleLogout = () => {
//         navigator.navigate("MainNavigation");
//     }
//     return (
//        <View style={styles.app}>
//            <Row>

//                 <Col numRows={1}>
//                     <Image  source={require('../assets/City2.jpg')} />
//                     <Text style={styles.txtBus}>Other</Text>
//                 </Col>
//             </Row>
//        </View>


//     )
// }







// const styles = StyleSheet.create(
//     {
//         app: {
//             flex: 1, // the number of columns you want to devide the screen into
//         //    marginHorizontal: "auto",
//             width: '100%',

//             justifyContent: 'center'
//         },
//         row: {
//             flexDirection: "row",
//             height: '10%'
//         },
//         // "1col":  {
//         //   backgroundColor:  "lightblue",
//         //   borderColor:  "#fff",
//         //   borderWidth:  1,
//         //   flex:  1
//         // },
//         // "2col":  {
//         //   backgroundColor:  "green",
//         //   borderColor:  "#fff",
//         //   borderWidth:  1,
//         //   flex:  2
//         // },
//         "3col": {
//             backgroundColor: "steelblue",
//             borderColor: "cyan",
//             borderWidth: 1,
//             flex: 2,
//             alignItems: 'center',
//             justifyContent: 'center'
//         },
//         // col3: {
//         //     backgroundColor: "steelblue",
//         //     // borderColor: "#fff",
//         //     // borderWidth: 0.4,
//         //     flex: 2,

//         // },

//         user: {
//             fontSize: 30,
//             color: '#fff'
//         },
//         txtBus: {
//             color: '#fff',
//             //  fontSize: 20

//         },

//     }
// )

// // RN Code
// const Col = ({ numRows, children }) => {
//     return (
//         // <TouchableOpacity style={styles[`${numRows}col`]} onPress={handleClick}>
//         //     {children}
//         // </TouchableOpacity>
//         <View style={styles[`${numRows}col`]}>
//             {children}
//         </View>
//     )
// }

// const Row = ({ children }) => (
//     <View style={styles.row}>{children}</View>
// )

import React, { useEffect, useState } from "react";
import { TextInput, View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import SearchBar from 'react-native-searchbar';
const Order = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        setIsLoading(true);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                //setUsers(res.data.results);
                setUsers([...users, ...res.data.results]);
                setIsLoading(false);
            });
    };

    const renderItem = ({ item }) => {
        return (
            <ScrollView >

                <TouchableOpacity style={styles.itemWrapperStyle} onPress={() => alert('ff')}>
                    <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
                    <View style={styles.contentWrapperStyle}>
                        <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                        <Text style={styles.txtEmailStyle}>{item.email}</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );
    };

    const renderLoader = () => {
        return (
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };
   
    useEffect(() => {
        getUsers();
    }, [currentPage]);

    return (

        <>
            <StatusBar backgroundColor="#000" />
            <View style={styles.txtSearch}>
                <SearchBar></SearchBar>
            </View>
            <View style={styles.data}>
                <FlatList

                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.email}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                />
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: "#ddd",
      
    },
    itemImageStyle: {
        width: 170,
        height: 170,
        marginRight: 16,
        borderRadius:10
    },
    contentWrapperStyle: {
        justifyContent: "center",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777",
    },
    loaderStyle: {
        // marginVertical: 16,
        alignItems: "center",
        justifyContent:'center'
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
    },
    txtSearch:{
      marginTop:50
       
    },
    data:{
       marginTop:'10%'

    }
});

export default Order;