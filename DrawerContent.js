import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} >
      <View style={styles.header}>
        <Text style={styles.title}>My App</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#c6cbef',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
