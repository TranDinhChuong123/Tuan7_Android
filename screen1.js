import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function screen1({ navigation }) {
  var [data, setData] = useState([]);
  fetch("https://653f4c7c9e8bd3be29e0339b.mockapi.io/trang1")
    .then((response) => response.json())
    .then((json) => setData(json));
  // .then((json) => console.log(json));

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome to Cafe world</Text>

      {data.map((item) => {
        return (
          <Image style={styles.image} source={{ uri: item.image1 }}></Image>
        );
      })}
      {data.map((item) => {
        return (
          <Image style={styles.image1} source={{ uri: item.image2 }}></Image>
        );
      })}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("screen2");
        }}
      >
        <Text>GET STARTED</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text1: {
    position: "absolute",
    width: "100%",
    height: 36,
    top: 89,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 36,
  },
  image: {
    position: "absolute",
    width: 200,
    height: 62,
    top: 197,
  },
  image1: {
    position: "absolute",
    width: 200,
    height: 78,
    top: 331,
    borderRadius: 6,
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
});
