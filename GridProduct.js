
import { Image,View } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
// Styles
const styles = StyleSheet.create({
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
  

   // width: 400,
    
  },
  item: {
    flex: 1,
    maxWidth: "40%", // 100% devided by the number of rows you want
    alignItems: "center",
    
    // my visual styles; not important for the grid
    padding: 50,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.6,
    borderColor: "#fff"
  }
})
 


// RN Code
const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};

export default function GridProduct() {
  return (
    <View style={styles.app}>
      <FlatList
        data={itemData}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
  );
}


// Sample Data
const itemData = [
  {
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
        }}
      />
    )
  },
  {
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png"
        }}
      />
    )
  },
  {
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
  {
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
  {
    icon: (
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
        }}
      />
    ),
  },
];