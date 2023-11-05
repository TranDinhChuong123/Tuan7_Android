import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function screen4() {
  var data = [
    {
      image: require("./Image 246.png"),
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
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Drinks</Text>
      <Image style={styles.image4} source={require("./Button 70.png")}></Image>
      <Image style={styles.image5} source={require("./Image 177.png")}></Image>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 26,
            top: 24,
            left: 13,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 26,
            color: "#FFFFFF",
          }}
        >
          CAFE DELIVERY
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 26,
            top: 61,
            left: 13,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 26,
            color: "#FFFFFF",
          }}
        >
          Order #18
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 30,
            top: 35,
            left: 301,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 30,
            color: "#FFFFFF",
          }}
        >
          $5
        </Text>
      </View>
      <View style={styles.container2}>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 26,
            top: 24,
            left: 13,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 26,
            color: "#FFFFFF",
          }}
        >
          CAFE
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 26,
            top: 61,
            left: 13,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 26,
            color: "#FFFFFF",
          }}
        >
          Order #18
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 150,
            height: 30,
            top: 35,
            left: 301,
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 30,
            color: "#FFFFFF",
          }}
        >
          $25
        </Text>
      </View>

      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container3}>
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
        style={{
          position: "absolute",
          width: 347,
          height: 44,
          top: 500,
          backgroundColor: "#EFB034",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>PAY NOW</Text>
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
  container1: {
    position: "absolute",
    width: 347,
    height: 100,
    top: 84,
    backgroundColor: "#00BDD6",
    borderRadius: 6,

    alignContent: "center",
  },
  container2: {
    position: "absolute",
    width: 347,
    height: 100,
    top: 191,
    backgroundColor: "#8353E2",
    borderRadius: 6,

    alignContent: "center",
  },
  flatList: {
    // position: "absolute",
    top: 300,
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
  container3: {
    width: 350,
    height: 64,
    borderRadius: 4,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 1,
    alignContent: "center",
  },
});
