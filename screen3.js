import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function screen3({ navigation }) {
  var data = [
    {
      image: require("./Image 5 (1).png"),
      image1: require("./Vector.png"),
      name: "Espresso",
      money: "$10",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 5 (2).png"),
      image1: require("./Vector.png"),
      name: "Salt",
      money: "$215",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 5 (1).png"),
      image1: require("./Image 5 (1).png"),
      name: "Origin",
      money: "$75",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 5 (2).png"),
      image1: require("./Image 5 (1).png"),
      name: "Milk",
      money: "$20",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 226.png"),
      image1: require("./Image 5 (1).png"),
      name: "Catimor ",
      money: "$44",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 5 (1).png"),
      image1: require("./Image 5 (1).png"),
      name: "Milk",
      money: "$54",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    {
      image: require("./Image 5 (1).png"),
      image1: require("./Image 5 (1).png"),
      name: "Milk",
      money: "$60",
      image2: require("./Image 230.png"),
      image3: require("./Image 231.png"),
    },
    // {
    //   image: require("./Image 5 (1).png"),
    //   image1: require("./Image 5 (1).png"),
    //   name: "Catimor ",
    //   money: "$20",
    //   image2: require("./Image 230.png"),
    //   image3: require("./Image 231.png"),
    // },
  ];
  return (
    <View style={styles.container}>
      {/* <Text> Open up App.js to start working on your app! </Text> */}
      <Text style={styles.text1}>Drinks</Text>
      //{" "}
      <Image style={styles.image4} source={require("./Button 70.png")}></Image>
      //{" "}
      <Image style={styles.image5} source={require("./Image 177.png")}></Image>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container1}>
            <Image style={styles.image} source={item.image}></Image>
            <Text
              style={{
                position: "absolute",
                fontWeight: "600",
                fontSize: 15,
                lineHeight: 28,
                left: 72,
              }}
            >
              {item.name}{" "}
            </Text>
            <Image style={styles.image1} source={item.image1}></Image>
            <Text
              style={{
                position: "absolute",
                fontWeight: "600",
                fontSize: 12,
                bottom: 2,
                lineHeight: 20,
                left: 85,
              }}
            >
              {item.money}{" "}
            </Text>
            <Image style={styles.image2} source={item.image2}></Image>
            <Image style={styles.image3} source={item.image3}></Image>
          </View>
        )}
      ></FlatList>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("screen4");
        }}
        style={{
          position: "absolute",
          width: 347,
          height: 44,
          top: 700,
          backgroundColor: "#EFB034",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>GO TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image4: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 17,
    left: 13,
  },
  image5: {
    position: "absolute",
    width: 28,
    height: 28,
    top: 27,
    right: 15,
  },
  text1: {
    position: "absolute",
    width: "100%",
    height: 36,
    top: 19,
    left: 65,

    fontSize: 24,
    fontWeight: "900",
    lineHeight: 36,
  },
  container1: {
    width: 350,
    height: 64,
    borderRadius: 4,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    alignContent: "center",
  },
  flatList: {
    position: "absolute",
    top: 86,
    // alignItems:"center",
  },
  image: {
    width: 60,
    height: 61,
  },
  image1: {
    position: "absolute",
    bottom: 5,
    left: 70,
    width: 12,
    height: 12,
  },
  image2: {
    position: "absolute",
    width: 20,
    height: 20,
    top: 23,
    left: 253,
  },
  image3: {
    position: "absolute",
    width: 20,
    height: 20,
    top: 23,
    left: 315,
  },
});
