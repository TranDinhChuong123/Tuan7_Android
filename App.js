// import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen1 from "./screen1";
import screen2 from "./screen2";
import screen3 from "./screen3";
import screen4 from "./screen4";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="screen1"
          component={screen1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screen2"
          component={screen2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screen3"
          component={screen3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screen4"
          component={screen4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { StyleSheet, Text, View ,Image, TouchableOpacity} from "react-native";

// export default function App() {
//   var [data, setData] = useState([]);
//   fetch("https://653f4c7c9e8bd3be29e0339b.mockapi.io/trang1")
//     .then((response) => response.json())
//     .then((json) => setData(json));
//     // .then((json) => console.log(json));

//   return (
//     <View style={styles.container}>
//         <Text style={styles.text1}>Welcome to Cafe world</Text>

//         {data.map((item) => {
//             return  <Image style={styles.image} source={{uri: item.image1}}></Image>
//         })}
//         {data.map((item) => {
//             return  <Image style={styles.image1} source={{uri: item.image2}}></Image>
//         })}

//         <TouchableOpacity style={styles.btn}>
//             <Text>GET STARTED</Text>
//         </TouchableOpacity>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   text1:{
//     position:"absolute",
//     width:"100%",
//     height:36,
//     top:89,
//     textAlign:"center",
//     fontSize:24,
//     lineHeight:36,

//   },
//   image:{
//     position:"absolute",
//     width:200,
//     height:62,
//     top:197,

//   },
//   image1:{
//     position:"absolute",
//     width:200,
//     height:78,
//     top:331,
//     borderRadius:6,

//   },
//   btn:{
//     position:"absolute",
//     alignItems:"center",
//     justifyContent:"center",
//     width:321,
//     height:50,
//     top:592,
//     backgroundColor:"#00BDD6",
//   },

// });
// hinh 2/////////////////////////////////////////////////////////////////////////////
// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from "react-native";

// export default function App() {
//   var [data, setData] = useState([]);
//   fetch("https://653f4c7c9e8bd3be29e0339b.mockapi.io/trang2")
//     .then((response) => response.json())
//     .then((json) => setData(json));
//   // .then((json) => console.log(json));

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>Shops Near Me</Text>
//       <Image style={styles.image} source={require("./Button 70.png")}></Image>
//       <Image style={styles.image1} source={require("./Image 177.png")}></Image>

//       <ScrollView>
//         <FlatList
//           style={styles.flatlist}
//           data={data}
//           renderItem={({ item }) => (
//             <View style={styles.container1}>
//               <Image style={styles.image2} source={{ uri: item.image }}></Image>
//               <Text style={styles.text2}>{item.text1}</Text>
//               <Text style={{ position: "absolute", top: 167, left: 7 }}>
//                 {item.text2}
//               </Text>

//               <Image
//                 style={styles.image3}
//                 source={{ uri: item.image1 }}
//               ></Image>
//               <Text
//                 style={{
//                   position: "absolute",
//                   top: 120,
//                   left: 40,
//                   color: "#1DD75B",
//                   fontSize: 14,
//                   fontWeight: "500",
//                   lineHeight: 22,
//                 }}
//               >
//                 {item.text3}
//               </Text>
//               <Image
//                 style={styles.image4}
//                 source={{ uri: item.image2 }}
//               ></Image>
//               <Text
//                 style={{
//                   position: "absolute",
//                   top: 120,
//                   left: 200,
//                   color: "red",
//                   fontSize: 14,
//                   fontWeight: "500",
//                   lineHeight: 22,
//                 }}
//               >
//                 {item.text4}
//               </Text>
//               <Image
//                 style={styles.image5}
//                 source={{ uri: item.image3 }}
//               ></Image>
//             </View>
//           )}
//         ></FlatList>
//       </ScrollView>

//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     width: "100%",
//   },
//   container1: {
//     // position: "absolute",
//     width: 350,
//     height: 200,

//     // justifyContent: "center",
//     // borderColor: "black",
//     // borderWidth: 1,
//     // width: "100%",
//     // height: 300,
//     // top: 74,
//     // left: 65,
//   },
//   text1: {
//     position: "absolute",
//     width: "100%",
//     height: 36,
//     top: 19,
//     left: 65,

//     fontSize: 24,
//     fontWeight: "900",
//     lineHeight: 36,
//   },
//   text2: {
//     position: "absolute",
//     width: "100%",
//     height: 30,
//     bottom: 30,
//     left: 7,

//     fontSize: 18,
//     fontWeight: "700",
//     lineHeight: 28,
//   },
//   image: {
//     position: "absolute",
//     width: 44,
//     height: 44,
//     top: 17,
//     left: 13,
//   },
//   image2: {
//     position: "absolute",
//     width: "100%",
//     height: 114,
//     borderRadius: 10,
//     // top: 200,
//   },
//   image3: {
//     position: "absolute",
//     width: 19,
//     height: 14,
//     left: 13,
//     top: 120,
//   },
//   image4: {
//     position: "absolute",
//     width: 19,
//     height: 19,
//     left: 174,
//     top: 120,
//   },
//   image5: {
//     position: "absolute",
//     width: 15,
//     height: 19,
//     left: 300,
//     top: 120,
//   },
//   image1: {
//     position: "absolute",
//     width: 28,
//     height: 28,
//     top: 27,
//     right: 15,
//   },
//   btn: {
//     position: "absolute",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 321,
//     height: 50,
//     top: 592,
//     backgroundColor: "#00BDD6",
//   },
//   flatlist: {
//     // position: "absolute",
//     top: 74,
//     width: "100%",
//   },
// });

////////////////////////////hinh4
// import { StatusBar } from "expo-status-bar";
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function App() {
//   var data = [
//     {
//       image: require("./Image 246.png"),
//       image1: require("./Vector.png"),
//       name: "Espresso",
//       money: "$10",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (2).png"),
//       image1: require("./Vector.png"),
//       name: "Salt",
//       money: "$215",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>Drinks</Text>
//       <Image style={styles.image4} source={require("./Button 70.png")}></Image>
//       <Image style={styles.image5} source={require("./Image 177.png")}></Image>
//       <StatusBar style="auto" />
//       <View style={styles.container1}>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 26,
//             top: 24,
//             left: 13,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 16,
//             lineHeight: 26,
//             color: "#FFFFFF",
//           }}
//         >
//           CAFE DELIVERY
//         </Text>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 26,
//             top: 61,
//             left: 13,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 16,
//             lineHeight: 26,
//             color: "#FFFFFF",
//           }}
//         >
//           Order #18
//         </Text>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 30,
//             top: 35,
//             left: 301,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 20,
//             lineHeight: 30,
//             color: "#FFFFFF",
//           }}
//         >
//           $5
//         </Text>
//       </View>
//       <View style={styles.container2}>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 26,
//             top: 24,
//             left: 13,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 16,
//             lineHeight: 26,
//             color: "#FFFFFF",
//           }}
//         >
//           CAFE
//         </Text>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 26,
//             top: 61,
//             left: 13,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 16,
//             lineHeight: 26,
//             color: "#FFFFFF",
//           }}
//         >
//           Order #18
//         </Text>
//         <Text
//           style={{
//             position: "absolute",
//             width: 150,
//             height: 30,
//             top: 35,
//             left: 301,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             fontSize: 20,
//             lineHeight: 30,
//             color: "#FFFFFF",
//           }}
//         >
//           $25
//         </Text>
//       </View>

//       <FlatList
//         style={styles.flatList}
//         data={data}
//         renderItem={({ item }) => (
//           <View style={styles.container3}>
//             <Image style={styles.image} source={item.image}></Image>

//             <Text
//               style={{
//                 position: "absolute",
//                 fontWeight: "600",
//                 fontSize: 15,
//                 lineHeight: 28,
//                 left: 72,
//               }}
//             >
//               {item.name}{" "}
//             </Text>
//             <Image style={styles.image1} source={item.image1}></Image>
//             <Text
//               style={{
//                 position: "absolute",
//                 fontWeight: "600",
//                 fontSize: 12,
//                 bottom: 2,
//                 lineHeight: 20,
//                 left: 85,
//               }}
//             >
//               {item.money}{" "}
//             </Text>
//             <Image style={styles.image2} source={item.image2}></Image>
//             <Image style={styles.image3} source={item.image3}></Image>
//           </View>
//         )}
//       ></FlatList>
//       <TouchableOpacity
//         style={{
//           position: "absolute",
//           width: 347,
//           height: 44,
//           top: 500,
//           backgroundColor: "#EFB034",
//           borderRadius: 10,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text>PAY NOW</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container1: {
//     position: "absolute",
//     width: 347,
//     height: 100,
//     top: 84,
//     backgroundColor: "#00BDD6",
//     borderRadius: 6,

//     alignContent: "center",
//   },
//   container2: {
//     position: "absolute",
//     width: 347,
//     height: 100,
//     top: 191,
//     backgroundColor: "#8353E2",
//     borderRadius: 6,

//     alignContent: "center",
//   },
//   flatList: {
//     // position: "absolute",
//     top: 300,
//     // alignItems:"center",
//   },
//   image: {
//     width: 60,
//     height: 61,
//   },
//   image1: {
//     position: "absolute",
//     bottom: 5,
//     left: 70,
//     width: 12,
//     height: 12,
//   },
//   image2: {
//     position: "absolute",
//     width: 20,
//     height: 20,
//     top: 23,
//     left: 253,
//   },
//   image3: {
//     position: "absolute",
//     width: 20,
//     height: 20,
//     top: 23,
//     left: 315,
//   },
//   image4: {
//     position: "absolute",
//     width: 44,
//     height: 44,
//     top: 17,
//     left: 13,
//   },
//   image5: {
//     position: "absolute",
//     width: 28,
//     height: 28,
//     top: 27,
//     right: 15,
//   },
//   text1: {
//     position: "absolute",
//     width: "100%",
//     height: 36,
//     top: 19,
//     left: 65,

//     fontSize: 24,
//     fontWeight: "900",
//     lineHeight: 36,
//   },
//   container3: {
//     width: 350,
//     height: 64,
//     borderRadius: 4,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 1,
//     alignContent: "center",
//   },
// });

//

/////////////////hinh3

///
// import { StatusBar } from "expo-status-bar";
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   var data = [
//     {
//       image: require("./Image 5 (1).png"),
//       image1: require("./Vector.png"),
//       name: "Espresso",
//       money: "$10",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (2).png"),
//       image1: require("./Vector.png"),
//       name: "Salt",
//       money: "$215",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (1).png"),
//       image1: require("./Image 5 (1).png"),
//       name: "Origin",
//       money: "$75",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (2).png"),
//       image1: require("./Image 5 (1).png"),
//       name: "Milk",
//       money: "$20",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 226.png"),
//       image1: require("./Image 5 (1).png"),
//       name: "Catimor ",
//       money: "$44",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (1).png"),
//       image1: require("./Image 5 (1).png"),
//       name: "Milk",
//       money: "$54",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     {
//       image: require("./Image 5 (1).png"),
//       image1: require("./Image 5 (1).png"),
//       name: "Milk",
//       money: "$60",
//       image2: require("./Image 230.png"),
//       image3: require("./Image 231.png"),
//     },
//     // {
//     //   image: require("./Image 5 (1).png"),
//     //   image1: require("./Image 5 (1).png"),
//     //   name: "Catimor ",
//     //   money: "$20",
//     //   image2: require("./Image 230.png"),
//     //   image3: require("./Image 231.png"),
//     // },
//   ];
//   return (
//     <View style={styles.container}>
//       {/* <Text> Open up App.js to start working on your app! </Text> */}
//       <Text style={styles.text1}>Drinks</Text>
//       //{" "}
//       <Image style={styles.image4} source={require("./Button 70.png")}></Image>
//       //{" "}
//       <Image style={styles.image5} source={require("./Image 177.png")}></Image>
//       <StatusBar style="auto" />
//       <FlatList
//         style={styles.flatList}
//         data={data}
//         renderItem={({ item }) => (
//           <View style={styles.container1}>
//             <Image style={styles.image} source={item.image}></Image>
//             <Text
//               style={{
//                 position: "absolute",
//                 fontWeight: "600",
//                 fontSize: 15,
//                 lineHeight: 28,
//                 left: 72,
//               }}
//             >
//               {item.name}{" "}
//             </Text>
//             <Image style={styles.image1} source={item.image1}></Image>
//             <Text
//               style={{
//                 position: "absolute",
//                 fontWeight: "600",
//                 fontSize: 12,
//                 bottom: 2,
//                 lineHeight: 20,
//                 left: 85,
//               }}
//             >
//               {item.money}{" "}
//             </Text>
//             <Image style={styles.image2} source={item.image2}></Image>
//             <Image style={styles.image3} source={item.image3}></Image>
//           </View>
//         )}
//       ></FlatList>
//       <TouchableOpacity
//         style={{
//           position: "absolute",
//           width: 347,
//           height: 44,
//           top: 700,
//           backgroundColor: "#EFB034",
//           borderRadius: 10,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text>GO TO CART</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image4: {
//     position: "absolute",
//     width: 44,
//     height: 44,
//     top: 17,
//     left: 13,
//   },
//   image5: {
//     position: "absolute",
//     width: 28,
//     height: 28,
//     top: 27,
//     right: 15,
//   },
//   text1: {
//     position: "absolute",
//     width: "100%",
//     height: 36,
//     top: 19,
//     left: 65,

//     fontSize: 24,
//     fontWeight: "900",
//     lineHeight: 36,
//   },
//   container1: {
//     width: 350,
//     height: 64,
//     borderRadius: 4,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 15,
//     alignContent: "center",
//   },
//   flatList: {
//     position: "absolute",
//     top: 86,
//     // alignItems:"center",
//   },
//   image: {
//     width: 60,
//     height: 61,
//   },
//   image1: {
//     position: "absolute",
//     bottom: 5,
//     left: 70,
//     width: 12,
//     height: 12,
//   },
//   image2: {
//     position: "absolute",
//     width: 20,
//     height: 20,
//     top: 23,
//     left: 253,
//   },
//   image3: {
//     position: "absolute",
//     width: 20,
//     height: 20,
//     top: 23,
//     left: 315,
//   },
// });
