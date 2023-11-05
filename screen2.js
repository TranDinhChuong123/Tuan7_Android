import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

export default function screen2({ navigation }) {
  var [data, setData] = useState([]);
  fetch("https://653f4c7c9e8bd3be29e0339b.mockapi.io/trang2")
    .then((response) => response.json())
    .then((json) => setData(json));
  // .then((json) => console.log(json));

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Shops Near Me</Text>
      <Image style={styles.image} source={require("./Button 70.png")}></Image>
      <Image style={styles.image1} source={require("./Image 177.png")}></Image>

      <ScrollView>
        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.container1}>
              <Image style={styles.image2} source={{ uri: item.image }}></Image>
              <TouchableOpacity onPress={() => navigation.navigate("screen3")}>
                <Text style={styles.text2}>{item.text1}</Text>
              </TouchableOpacity>
              <Text style={{ position: "absolute", top: 167, left: 7 }}>
                {item.text2}
              </Text>

              <Image
                style={styles.image3}
                source={{ uri: item.image1 }}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  top: 120,
                  left: 40,
                  color: "#1DD75B",
                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 22,
                }}
              >
                {item.text3}
              </Text>
              <Image
                style={styles.image4}
                source={{ uri: item.image2 }}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  top: 120,
                  left: 200,
                  color: "red",
                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 22,
                }}
              >
                {item.text4}
              </Text>
              <Image
                style={styles.image5}
                source={{ uri: item.image3 }}
              ></Image>
            </View>
          )}
        ></FlatList>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  container1: {
    // position: "absolute",
    width: 350,
    height: 200,

    // justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
    // width: "100%",
    // height: 300,
    // top: 74,
    // left: 65,
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
  text2: {
    position: "absolute",
    width: "100%",
    height: 30,
    bottom: 30,
    left: 7,

    fontSize: 18,
    fontWeight: "700",
    lineHeight: 28,
  },
  image: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 17,
    left: 13,
  },
  image2: {
    position: "absolute",
    width: "100%",
    height: 114,
    borderRadius: 10,
    // top: 200,
  },
  image3: {
    position: "absolute",
    width: 19,
    height: 14,
    left: 13,
    top: 120,
  },
  image4: {
    position: "absolute",
    width: 19,
    height: 19,
    left: 174,
    top: 120,
  },
  image5: {
    position: "absolute",
    width: 15,
    height: 19,
    left: 300,
    top: 120,
  },
  image1: {
    position: "absolute",
    width: 28,
    height: 28,
    top: 27,
    right: 15,
  },
  btn: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 321,
    height: 50,
    top: 592,
    backgroundColor: "#00BDD6",
  },
  flatlist: {
    // position: "absolute",
    top: 74,
    width: "100%",
  },
});
