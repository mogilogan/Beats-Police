import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function SELECT({ navigation }) {
  return (
    <View style={styles.assignPage3}>
      <View style={[styles.assignPage3Child, styles.assignPosition]} />
      <View style={[styles.assignPage3Item, styles.assignPosition]} />
      <View style={styles.assignPage3Inner} />
      <Text style={styles.eBeat}>#E-BEAT</Text>
      <Pressable
        style={[styles.frame, styles.vectorPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={[styles.vectorWrapper, styles.vectorPosition]}>
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </View>
      <Pressable
        style={[styles.vectorContainer, styles.vectorPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.assignPage3Child1, styles.assignChildLayout]} />
      <View style={[styles.assignPage3Child2, styles.assignChildLayout]} />
      <Text style={styles.beatXSdY}>BEAT-X SD-Y</Text>
      <Text
        style={[styles.selectTimings, styles.selectTypo]}
        onPress={() => {
          navigation.navigate("SelectTimings");
        }}
      >
        Select timings
      </Text>
      <Text
        style={[styles.selectOfficers, styles.selectTypo]}
        onPress={() => {
          navigation.navigate("SelectOfficers");
        }}
      >
        Select officers
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover" /*source="Frame 21.png"*/
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover" /*source="Frame 22.png"*/
        />
      </Pressable>
      <View style={[styles.assignPage3Child3, styles.rectangleViewPosition]} />
      <Pressable
        style={styles.confirm}
        onPress={() => {
          navigation.navigate("DashBoard");
        }}
      >
        <Text style={styles.selectTypo}>CONFIRM</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  assignPosition: {
    height: 25,
    backgroundColor: "#d9d9d9",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  vectorPosition: {
    padding: 5,
    flexDirection: "row",
    top: 47,
    position: "absolute",
  },
  rectangleViewPosition: {
    height: 50,
    left: "50%",
    position: "absolute",
  },
  assignChildLayout: {
    borderRadius: 50,
    height: 50,
    width: 350,
    backgroundColor: "#bbc7e7",
    left: "50%",
    position: "absolute",
  },
  selectTypo: {
    letterSpacing: 1.2,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "left",
  },
  wrapperLayout: {
    height: 21,
    width: 28,
    position: "absolute",
  },
  assignPage3Child: {
    top: 0,
  },
  assignPage3Item: {
    bottom: 0,
  },
  assignPage3Inner: {
    top: 25,
    backgroundColor: "#8b98d8",
    height: 75,
    width: 360,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  eBeat: {
    marginLeft: -120,
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: "Roboto",
    color: "#000",
    width: 160,
    textAlign: "left",
    top: 47,
    left: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    width: 20,
    height: 20,
  },
  frame: {
    left: 317,
  },
  vectorIcon4: {
    width: 18,
    height: 20,
  },
  vectorWrapper: {
    left: 279,
  },
  vectorContainer: {
    left: 21,
  },
  rectangleView: {
    top: 115,
    width: 350,
    backgroundColor: "#bbc7e7",
    height: 50,
    marginLeft: -175,
  },
  assignPage3Child1: {
    top: 215,
    marginLeft: -175,
    borderRadius: 50,
  },
  assignPage3Child2: {
    marginLeft: -176,
    top: 280,
  },
  beatXSdY: {
    marginLeft: -89,
    top: 125,
    fontSize: 25,
    letterSpacing: 1.5,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  selectTimings: {
    marginLeft: -155,
    top: 228,
    left: "50%",
    fontSize: 20,
    position: "absolute",
  },
  selectOfficers: {
    marginLeft: -156,
    top: 293,
    left: "50%",
    fontSize: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 301,
    top: 230,
  },
  container: {
    left: 300,
    top: 295,
  },
  assignPage3Child3: {
    marginLeft: -100,
    top: 630,
    borderRadius: 100,
    backgroundColor: "#f98484",
    width: 200,
  },
  confirm: {
    left: 128,
    top: 643,
    position: "absolute",
  },
  assignPage3: {
    backgroundColor: "#fff",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SELECT;
