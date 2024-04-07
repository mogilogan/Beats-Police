import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function VIEWDETAILS({ navigation }) {
  return (
    <View style={styles.viewPage2}>
      <View style={[styles.viewPage2Child, styles.viewPosition]} />
      <View style={[styles.viewPage2Item, styles.viewPosition]} />
      <View style={styles.viewPage2Inner} />
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
      <Text style={styles.beatX}>BEAT-X</Text>
      <View style={styles.viewPage2Child1} />
      <View style={[styles.viewPage2Child2, styles.viewChildLayout]} />
      <View style={[styles.viewPage2Child3, styles.viewChildLayout]} />
      <View style={[styles.viewPage2Child4, styles.viewChildLayout]} />
      <View style={[styles.viewPage2Child5, styles.viewChildLayout]} />
      <View style={[styles.viewPage2Child6, styles.viewChildLayout]} />
      <View style={[styles.viewPage2Child7, styles.viewChildLayout]} />
      <View style={[styles.lineView, styles.viewLayout]} />
      <View style={[styles.viewPage2Child8, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child9, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child10, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child11, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child12, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child13, styles.viewChildPosition1]} />
      <View style={[styles.viewPage2Child14, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child15, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child16, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child17, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child18, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child19, styles.viewChildPosition]} />
      <View style={[styles.viewPage2Child20, styles.viewChildPosition]} />
      <Text style={[styles.subDivisions, styles.timingsTypo]}>
        SUB-DIVISIONS
      </Text>
      <Text style={[styles.officers, styles.timingsTypo]}>OFFICERS</Text>
      <Text style={[styles.timings, styles.timingsTypo]}>TIMINGS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPosition: {
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
  viewChildLayout: {
    height: 30,
    width: 330,
    borderWidth: 0.8,
    borderColor: "#000",
    borderStyle: "solid",
    marginLeft: -165,
    left: "50%",
    position: "absolute",
    backgroundColor: "#fff",
  },
  viewLayout: {
    height: 41,
    top: 180,
  },
  viewChildPosition1: {
    width: 1,
    borderRightWidth: 0.8,
    left: 117,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  viewChildPosition: {
    left: 263,
    width: 1,
    borderRightWidth: 0.8,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  timingsTypo: {
    fontSize: 10,
    top: 194,
    fontFamily: "Roboto",
    textAlign: "left",
    color: "#000",
    position: "absolute",
  },
  viewPage2Child: {
    top: 0,
  },
  viewPage2Item: {
    bottom: 0,
  },
  viewPage2Inner: {
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
    width: 160,
    textAlign: "left",
    color: "#000",
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
    borderRadius: 5,
    backgroundColor: "#bbc7e7",
    width: 350,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  beatX: {
    marginLeft: -75,
    top: 125,
    fontSize: 25,
    letterSpacing: 1.5,
    color: "#001097",
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  viewPage2Child1: {
    height: 40,
    width: 330,
    borderWidth: 0.8,
    borderColor: "#000",
    borderStyle: "solid",
    top: 180,
    marginLeft: -165,
    left: "50%",
    position: "absolute",
    backgroundColor: "#fff",
  },
  viewPage2Child2: {
    top: 219,
  },
  viewPage2Child3: {
    top: 248,
  },
  viewPage2Child4: {
    top: 277,
  },
  viewPage2Child5: {
    top: 306,
  },
  viewPage2Child6: {
    top: 335,
  },
  viewPage2Child7: {
    top: 364,
  },
  lineView: {
    width: 1,
    borderRightWidth: 0.8,
    left: 117,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  viewPage2Child8: {
    height: 31,
    top: 219,
  },
  viewPage2Child9: {
    height: 31,
    top: 248,
  },
  viewPage2Child10: {
    height: 31,
    top: 277,
  },
  viewPage2Child11: {
    height: 31,
    top: 306,
  },
  viewPage2Child12: {
    height: 31,
    top: 335,
  },
  viewPage2Child13: {
    height: 31,
    top: 364,
  },
  viewPage2Child14: {
    height: 41,
    top: 180,
  },
  viewPage2Child15: {
    height: 31,
    top: 219,
  },
  viewPage2Child16: {
    height: 31,
    top: 248,
  },
  viewPage2Child17: {
    height: 31,
    top: 277,
  },
  viewPage2Child18: {
    height: 31,
    top: 306,
  },
  viewPage2Child19: {
    height: 31,
    top: 335,
  },
  viewPage2Child20: {
    height: 31,
    top: 364,
  },
  subDivisions: {
    left: 27,
  },
  officers: {
    marginLeft: -25,
    left: "50%",
  },
  timings: {
    left: 280,
  },
  viewPage2: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default VIEWDETAILS;
