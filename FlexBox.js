import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
const styles = StyleSheet.create(
    {
        app: {
            flex: 4, // the number of columns you want to devide the screen into
            marginHorizontal: "auto",
            width: '100%',
            backgroundColor: 'steelblue',
            justifyContent: 'flex-end'
        },
        row: {
            flexDirection: "row",
            height: '20%'
        },
        // "1col":  {
        //   backgroundColor:  "lightblue",
        //   borderColor:  "#fff",
        //   borderWidth:  1,
        //   flex:  1
        // },
        // "2col":  {
        //   backgroundColor:  "green",
        //   borderColor:  "#fff",
        //   borderWidth:  1,
        //   flex:  2
        // },
        "3col": {
            backgroundColor: "steelblue",
            borderColor: "cyan",
            borderWidth: 1,
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center'
        },
        col3: {
            backgroundColor: "steelblue",
            // borderColor: "#fff",
            // borderWidth: 0.4,
            flex: 3,

        },
        "4col": {
            flex: 4
        },
        user: {
            fontSize: 30,
            color: '#fff'
        },
        txtBus: {
            color: '#fff',
            //  fontSize: 20

        },
        imageslider: {
          marginVertical:'12%'
          
        }
    }
)

// RN Code
const Col = ({ numRows, children }) => {
    return (
        // <TouchableOpacity style={styles[`${numRows}col`]} onPress={handleClick}>
        //     {children}
        // </TouchableOpacity>
        <View style={styles[`${numRows}col`]}>
            {children}
        </View>
    )
}

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

export default function FlexBox() {
    const navigator = useNavigation();
    const handleClick = () => {
        navigator.navigate("Order");
    }


    const images = [
        require('./assets/City.jpg'),
        require('./assets/City2.jpg'),
        require('./assets/City3.jpg'),
    ]
    return (
        <View style={styles.app}>
            <View style={styles.imageslider}>
                 <SliderBox images={images}   autoplay={true}
                 resizeMethod={'resize'}
                 resizeMode={'cover'}
                 paginationBoxStyle={{
                   position: "absolute",
                   bottom: 0,
                   padding: 0,
                   alignItems: "center",
                   alignSelf: "center",
                   justifyContent: "center",
                   paddingVertical: 10
                 }}
                 dotStyle={{
                   width: 10,
                   height: 10,
                   borderRadius: 10,
                   marginHorizontal: 0,
                   padding: 0,
                   margin: 0,
                   backgroundColor: "rgba(128, 128, 128, 0.92)"
                 }}
                 ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
                 autoplayInterval={3000}
                 circleLoop={true}
                 
                 >
                  
                 </SliderBox>
            </View>
            <Row>
                <TouchableOpacity style={styles.col3} onPress={handleClick}>
                    <Col numRows={3} >
                        <Image source={require('./assets/bus.png')} />
                        <Text style={styles.txtBus}>Bus</Text>
                    </Col>
                </TouchableOpacity>
                <TouchableOpacity style={styles.col3} onPress={() => alert("hi")}>
                    <Col numRows={3}>
                        <Image source={require('./assets/hotel.png')} />
                        <Text style={styles.txtBus}>Hotel</Text>
                    </Col>
                </TouchableOpacity>
                <Col numRows={3}>
                    <Image source={require('./assets/airplane.png')} />
                    <Text style={styles.txtBus}>Airplan</Text>
                </Col>
            </Row>
            <Row>
                <TouchableOpacity style={styles.col3} onPress={() => alert("13")}>
                    <Col numRows={3}>
                        <Image source={require('./assets/auto-rick.png')} />
                        <Text style={styles.txtBus}>Auto Rickshaw</Text>
                    </Col>
                </TouchableOpacity>
                <Col numRows={3}>
                    <Image source={require('./assets/car-service.png')} />
                    <Text style={styles.txtBus}>Car Service</Text>
                </Col>
                <Col numRows={3}>
                    <Image source={require('./assets/taxi.png')} />
                    <Text style={styles.txtBus}>Taxi</Text>
                </Col>
            </Row>
            <Row>
                <Col numRows={3}>
                    <Image source={require('./assets/tour.png')} />
                    <Text style={styles.txtBus}>Tour Agency</Text>
                </Col>
                <Col numRows={3}>
                    <Image source={require('./assets/food-delivery.png')} />
                    <Text style={styles.txtBus}>Food Delivery</Text>
                </Col>
                <Col numRows={3}>
                    <Image source={require('./assets/mores.png')} />
                    <Text style={styles.txtBus}>Other</Text>
                </Col>
            </Row>
            {/* <Row>
          <Col numRows={1}>
            <Text>First column</Text>
          </Col>
          <Col numRows={3}>
            <Text>Second Column</Text>
          </Col>
        </Row> */}
        </View>
    )
}