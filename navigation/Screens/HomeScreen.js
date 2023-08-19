import * as React from 'react';
import { View, Text,Image,StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
export default function HomeScreen({ navigation }) {
    const navigator=useNavigation();
    return (
        <ScrollView>
          <View style={styles.product}  >
            <TouchableOpacity onPress={()=>alert("dcdcd")}>
            <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Text style={{textAlign:'center'}}>IPhone 14</Text>
            </TouchableOpacity>
        
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           

          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://1.bp.blogspot.com/-FWzF6k9Nx_8/YUXpKsoz1oI/AAAAAAAABJk/rq-dRp8uw3kG6yEktL01bdMU0d7XM76yACLcBGAsYHQ/w1684-h1069-p-k-no-nu/Screenshot_20210918-185426%257E2.png' }}
           
          />
          </View>
        </ScrollView>
        
    );
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
    product:{
          justifyContent:'space-evenly',
            flexDirection: 'row',
            flexWrap: 'wrap',
        
    }
  });