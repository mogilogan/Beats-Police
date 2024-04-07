import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function REPORTBEAT({ navigation }) {
  return (
    <View style={styles.reportPage1}>
      <View style={[styles.reportPage1Child, styles.reportPosition2]} />
      <View style={[styles.reportPage1Item, styles.reportPosition2]} />
      <View style={styles.reportPage1Inner} />
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
      <View style={styles.rectangleView} />
      <Text style={styles.currentReports}>CURRENT REPORTS</Text>
      <View style={[styles.reportPage1Child1, styles.reportChildLayout1]} />
      <View style={[styles.reportPage1Child2, styles.reportChildLayout1]} />
      <View style={[styles.reportPage1Child3, styles.reportChildLayout]} />
      <View style={[styles.reportPage1Child4, styles.reportChildLayout]} />
      <View style={[styles.reportPage1Child5, styles.reportChildPosition1]} />
      <View style={[styles.reportPage1Child6, styles.reportChildPosition1]} />
      <View style={[styles.reportPage1Child7, styles.reportChildPosition]} />
      <View style={[styles.reportPage1Child8, styles.reportChildPosition]} />
      <Text style={[styles.reportFromOfficer3, styles.reportTypo]}>
        Report from officer X
      </Text>
      <Text style={[styles.reportFromOfficer4, styles.reportTypo]}>
        Report from officer Y
      </Text>
      <Text style={[styles.reportFromOfficer5, styles.previousReportsPosition]}>
        Report from officer Z
      </Text>
      <Pressable
        style={[styles.previousReports, styles.previousReportsPosition]}
        onPress={() => {
          navigation.navigate("Previous");
        }}
      >
        <Text style={styles.reportTypo}>PREVIOUS REPORTS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  reportPosition2: {
    height: 25,
    width: 360,
    backgroundColor: "#d9d9d9",
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
  reportChildLayout1: {
    height: 100,
    width: 158,
    top: 195,
    backgroundColor: "#bbc7e7",
    borderRadius: 10,
    position: "absolute",
  },
  reportChildLayout: {
    top: 317,
    height: 100,
    width: 158,
    backgroundColor: "#bbc7e7",
    borderRadius: 10,
    position: "absolute",
  },
  reportChildPosition1: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    top: 270,
    width: 158,
    backgroundColor: "#8b98d8",
    height: 25,
    position: "absolute",
  },
  reportChildPosition: {
    top: 392,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 158,
    backgroundColor: "#8b98d8",
    height: 25,
    position: "absolute",
  },
  reportTypo: {
    letterSpacing: 0.6,
    fontSize: 10,
    color: "#001097",
    fontFamily: "Roboto",
    textAlign: "left",
  },
  previousReportsPosition: {
    top: 399,
    position: "absolute",
  },
  reportPage1Child: {
    top: 0,
  },
  reportPage1Item: {
    bottom: 0,
  },
  reportPage1Inner: {
    top: 25,
    height: 75,
    backgroundColor: "#8b98d8",
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
    width: 350,
    height: 50,
    backgroundColor: "#bbc7e7",
    borderRadius: 10,
    left: "50%",
    position: "absolute",
  },
  currentReports: {
    marginLeft: -102,
    top: 128,
    fontSize: 20,
    letterSpacing: 1.2,
    color: "#001097",
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  reportPage1Child1: {
    left: 23,
  },
  reportPage1Child2: {
    left: 190,
  },
  reportPage1Child3: {
    left: 23,
  },
  reportPage1Child4: {
    left: 190,
  },
  reportPage1Child5: {
    left: 23,
  },
  reportPage1Child6: {
    left: 190,
  },
  reportPage1Child7: {
    left: 23,
  },
  reportPage1Child8: {
    left: 190,
  },
  reportFromOfficer3: {
    left: 45,
    fontSize: 10,
    top: 277,
    position: "absolute",
  },
  reportFromOfficer4: {
    left: 212,
    top: 277,
    position: "absolute",
  },
  reportFromOfficer5: {
    letterSpacing: 0.6,
    fontSize: 10,
    color: "#001097",
    fontFamily: "Roboto",
    textAlign: "left",
    left: 45,
  },
  previousReports: {
    left: 212,
  },
  reportPage1: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default REPORTBEAT;
