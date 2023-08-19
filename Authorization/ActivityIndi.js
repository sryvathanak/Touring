import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ActivityIndicatorExample()
{
    const [loaded, setLoaded] = React.useState(true);
    const navigator=useNavigation();
    // useEffect(()=>{
    //    navigator.navigate('MainNavigation')
    // },[])
    useEffect(() => {
        setTimeout(() => {
          setLoaded(false);
          navigator.navigate('MainNavigation')
        }, 3000);
      }, []);
    
    return(
        <View style={styles.container}>
         
            <ActivityIndicator  
               style = {styles.activityIndicator}
              loaded={loaded}
              color = '#bc2b78'
              size = "large"
            />
           
          </View>
          )  
          
}
  


const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })
