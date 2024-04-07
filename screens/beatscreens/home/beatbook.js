import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function BEATBOOK({ navigation }) {
  return (
    <View style={styles.homeDb2}>
      <View style={styles.homeDb2Child} />
      <Text style={styles.eBeat}>#E-BEAT</Text>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <Pressable
        style={[styles.vectorWrapper, styles.framePosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={styles.homeDb2Item} />
      <View style={[styles.beatBookWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.beatBook}>Beat book</Text>
      </View>
      <Pressable
        style={[styles.dashboardWrapper, styles.wrapperFlexBox]}
        onPress={() => {
          navigation.navigate("DashBoard");
        }}
      >
        <Text style={[styles.dashboard, styles.beat3Typo]}>Dashboard</Text>
      </Pressable>
      <View style={styles.homeDb2Inner} />
      <View style={[styles.rectangleView, styles.homeChildLayout]} />
      <View style={[styles.homeDb2Child1, styles.homeChildLayout]} />
      <View style={[styles.homeDb2Child2, styles.homeChildLayout]} />
      <View style={[styles.homeDb2Child3, styles.homeChildPosition]} />
      <View style={[styles.homeDb2Child4, styles.homeChildPosition]} />
      <Text style={[styles.beat1, styles.beatPosition]}>beat #1</Text>
      <Text style={[styles.beat2, styles.beatPosition]}>beat #2</Text>
      <Text style={[styles.beat3, styles.beat3Typo]}>beat #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  framePosition: {
    padding: 5,
    flexDirection: "row",
    top: 47,
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 50,
    top: 100,
    flexDirection: "row",
    position: "absolute",
  },
  beat3Typo: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "left",
  },
  homeChildLayout: {
    width: 330,
    backgroundColor: "#bbc7e7",
    borderRadius: 20,
    height: 75,
    left: "50%",
    position: "absolute",
  },
  homeChildPosition: {
    height: 25,
    backgroundColor: "#d9d9d9",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  beatPosition: {
    marginLeft: -38,
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  homeDb2Child: {
    top: 25,
    height: 75,
    width: 360,
    backgroundColor: "#8b98d8",
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  eBeat: {
    marginLeft: -160,
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: "Roboto",
    width: 160,
    textAlign: "left",
    color: "#000",
    top: 47,
    left: "50%",
    position: "absolute",
  },
  vectorIcon2: {
    width: 20,
    height: 20,
  },
  frame: {
    left: 317,
  },
  vectorIcon3: {
    width: 18,
    height: 20,
  },
  vectorWrapper: {
    left: 279,
  },
  homeDb2Item: {
    height: 50,
    top: 100,
    width: 360,
    backgroundColor: "#8b98d8",
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  beatBook: {
    fontFamily: "Roboto",
    fontSize: 20,
    letterSpacing: 1.2,
    textAlign: "left",
    color: "#000",
  },
  beatBookWrapper: {
    left: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard: {
    letterSpacing: 1.2,
    color: "#fff",
  },
  dashboardWrapper: {
    right: 0,
  },
  homeDb2Inner: {
    top: 145,
    backgroundColor: "#0400c5",
    height: 5,
    width: 180,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 165,
    marginLeft: -165,
    width: 330,
    backgroundColor: "#bbc7e7",
    borderRadius: 20,
  },
  homeDb2Child1: {
    top: 255,
    marginLeft: -165,
    width: 330,
    backgroundColor: "#bbc7e7",
    borderRadius: 20,
  },
  homeDb2Child2: {
    marginLeft: -168,
    top: 345,
  },
  homeDb2Child3: {
    top: 0,
  },
  homeDb2Child4: {
    bottom: 0,
  },
  beat1: {
    top: 193,
  },
  beat2: {
    top: 283,
  },
  beat3: {
    marginLeft: -41,
    top: 373,
    color: "#fff",
    left: "50%",
    position: "absolute",
  },
  homeDb2: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default BEATBOOK;
