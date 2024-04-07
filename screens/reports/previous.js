import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function PREVIOUS({ navigation }) {
  return (
    <View style={styles.reportPage2}>
      <View style={[styles.reportPage2Child, styles.reportPosition]} />
      <View style={[styles.reportPage2Item, styles.reportPosition]} />
      <View style={styles.reportPage2Inner} />
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
      <Text style={[styles.previousReports, styles.ddmmyyyyTypo]}>
        PREVIOUS REPORTS
      </Text>
      <View style={[styles.reportPage2Child1, styles.rectangleViewPosition]} />
      <Text style={[styles.ddmmyyyy, styles.ddmmyyyyTypo]}>DD|MM|YYYY</Text>
      <View style={styles.calenderWrapper}>
        <Image
          style={styles.calenderIcon}
          resizeMode="cover" /*source="CALENDER.png"*/
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reportPosition: {
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
    backgroundColor: "#bbc7e7",
    left: "50%",
    position: "absolute",
  },
  ddmmyyyyTypo: {
    fontFamily: "Roboto",
    letterSpacing: 1.2,
    fontSize: 20,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  reportPage2Child: {
    top: 0,
  },
  reportPage2Item: {
    bottom: 0,
  },
  reportPage2Inner: {
    top: 25,
    backgroundColor: "#8b98d8",
    height: 75,
    width: 360,
    left: "50%",
    marginLeft: -180,
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
    marginLeft: -175,
    top: 115,
    borderRadius: 10,
    width: 350,
  },
  previousReports: {
    marginLeft: -102,
    top: 128,
    color: "#001097",
  },
  reportPage2Child1: {
    marginLeft: -150,
    top: 197,
    borderRadius: 50,
    width: 300,
  },
  ddmmyyyy: {
    marginLeft: -73,
    top: 211,
    color: "#fff",
  },
  calenderIcon: {
    width: 16,
    height: 16,
  },
  calenderWrapper: {
    top: 208,
    left: 269,
    padding: 7,
    flexDirection: "row",
    position: "absolute",
  },
  reportPage2: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PREVIOUS;
