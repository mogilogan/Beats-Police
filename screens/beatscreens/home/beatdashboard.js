import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function DASHBOARD({ navigation }) {
  return (
    <View style={styles.homeDb}>
      <View style={styles.homeDbChild} />
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
      <View style={[styles.homeDbItem, styles.homePosition]} />
      <Pressable
        style={[styles.beatBookWrapper, styles.wrapperFlexBox]}
        onPress={() => {
          navigation.navigate("BeatBook");
        }}
      >
        <Text style={[styles.beatBook, styles.beatBookTypo]}>Beat book</Text>
      </Pressable>
      <View style={[styles.dashboardWrapper, styles.homeDbInnerPosition]}>
        <Text style={[styles.dashboard, styles.beatBookTypo1]}>Dashboard</Text>
      </View>
      <View style={[styles.homeDbInner, styles.homeDbInnerPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.homeDbChild1, styles.homeChildPosition]} />
      <View style={[styles.homeDbChild2, styles.homeChildPosition]} />
      <View style={[styles.homeDbChild3, styles.homePosition]} />
      <Text
        style={[styles.dutiesAssigned, styles.beatBookTypo]}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        DUTIES ASSIGNED
      </Text>
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
  homePosition: {
    height: 50,
    backgroundColor: "#8b98d8",
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    top: 100,
    flexDirection: "row",
  },
  beatBookTypo: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
  },
  homeDbInnerPosition: {
    right: 0,
    width: 180,
    position: "absolute",
  },
  beatBookTypo1: {
    fontFamily: "Roboto",
    letterSpacing: 1.2,
  },
  rectangleViewPosition: {
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
  homeDbChild: {
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
  homeDbItem: {
    top: 100,
    height: 50,
    width: 360,
    marginLeft: -180,
  },
  beatBook: {
    fontFamily: "Roboto",
    letterSpacing: 1.2,
  },
  beatBookWrapper: {
    left: 0,
    width: 180,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  dashboard: {
    fontSize: 20,
    fontFamily: "Roboto",
    letterSpacing: 1.2,
    textAlign: "left",
    color: "#000",
  },
  dashboardWrapper: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    top: 100,
    flexDirection: "row",
  },
  homeDbInner: {
    top: 145,
    backgroundColor: "#0400c5",
    height: 5,
  },
  rectangleView: {
    marginLeft: -163,
    top: 223,
    borderRadius: 20,
    backgroundColor: "#bbc7e7",
    width: 330,
    height: 125,
  },
  homeDbChild1: {
    top: 0,
  },
  homeDbChild2: {
    bottom: 0,
  },
  homeDbChild3: {
    marginLeft: -179,
    top: 151,
    width: 358,
  },
  dutiesAssigned: {
    marginLeft: -92,
    top: 164,
    fontWeight: "700",
    fontFamily: "Roboto",
    left: "50%",
    position: "absolute",
  },
  homeDb: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default DASHBOARD;
