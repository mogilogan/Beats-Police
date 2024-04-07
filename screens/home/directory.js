import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function DIRECTORY({ navigation }) {
  return (
    <View style={styles.directory}>
      <View style={[styles.directoryChild, styles.directoryPosition]} />
      <View style={[styles.directoryItem, styles.directoryPosition]} />
      <View style={styles.directoryInner} />
      <Text style={styles.eBeatDirectory}>#E-BEAT-DIRECTORY</Text>
      <Pressable style={styles.vectorWrapper} onPress={() => {}}>
        <Image
          style={styles.vectorIcon7}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={styles.searchOfficer}>Search officer...</Text>
      <Image
        style={styles.searchoutlineIcon}
        resizeMode="cover" /*source="SearchOutline.png"*/
      />
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout]}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Text style={[styles.officer1, styles.officerTypo]}>Officer 1</Text>
        <Text style={[styles.officer2, styles.officerTypo]}>Officer 2</Text>
        <Text style={[styles.officer3, styles.officerTypo]}>Officer 3</Text>
        <Text style={[styles.officer4, styles.officerTypo]}>Officer 4</Text>
        <Text style={[styles.officer5, styles.officerTypo]}>Officer 5</Text>
        <Text style={[styles.officer6, styles.officerTypo]}>Officer 6</Text>
        <Text style={[styles.text6, styles.textTypo]}>987******0</Text>
        <Text style={[styles.text7, styles.textTypo]}>987******0</Text>
        <Text style={[styles.text8, styles.textTypo]}>987******0</Text>
        <Text style={[styles.text9, styles.textTypo]}>987******0</Text>
        <Text style={[styles.text10, styles.textTypo]}>987******0</Text>
        <Text style={[styles.text11, styles.textTypo]}>987******0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  directoryPosition: {
    height: 25,
    backgroundColor: "#d9d9d9",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  frameChildLayout: {
    marginTop: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    height: 50,
    width: 330,
    backgroundColor: "#fff",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
    position: "absolute",
    overflow: "hidden",
  },
  officerTypo: {
    color: "#001097",
    fontSize: 17,
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: "#507ffa",
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  directoryChild: {
    top: 0,
  },
  directoryItem: {
    bottom: 0,
  },
  directoryInner: {
    top: 25,
    backgroundColor: "#8b98d8",
    height: 75,
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  eBeatDirectory: {
    marginLeft: -125,
    top: 50,
    fontSize: 20,
    letterSpacing: 1.2,
    fontFamily: "Roboto",
    color: "#000",
    width: 235,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  vectorIcon7: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    top: 45,
    left: 21,
    flexDirection: "row",
    padding: 5,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -173,
    top: 115,
    borderRadius: 50,
    backgroundColor: "rgba(124, 136, 240, 0.75)",
    height: 50,
    width: 330,
    left: "50%",
    position: "absolute",
  },
  searchOfficer: {
    top: 132,
    left: 33,
    fontSize: 15,
    letterSpacing: 0.9,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  searchoutlineIcon: {
    top: 128,
    left: 298,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    zIndex: 0,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    height: 50,
    width: 330,
    backgroundColor: "#fff",
  },
  frameItem: {
    zIndex: 1,
  },
  frameInner: {
    zIndex: 2,
  },
  frameChild1: {
    zIndex: 3,
  },
  frameChild2: {
    zIndex: 4,
  },
  frameChild3: {
    zIndex: 5,
  },
  vectorIcon8: {
    top: "4.01%",
    bottom: "87.67%",
    zIndex: 6,
    left: "6.9%",
    right: "86.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  vectorIcon9: {
    top: "20.67%",
    bottom: "71.01%",
    zIndex: 7,
    left: "6.9%",
    right: "86.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  vectorIcon10: {
    top: "37.34%",
    bottom: "54.34%",
    zIndex: 8,
    left: "6.9%",
    right: "86.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  vectorIcon11: {
    top: "54.01%",
    bottom: "37.67%",
    zIndex: 9,
    left: "6.9%",
    right: "86.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  vectorIcon12: {
    top: "70.67%",
    bottom: "21.01%",
    zIndex: 10,
    left: "6.9%",
    right: "86.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  vectorIcon13: {
    top: "87.34%",
    right: "86.4%",
    bottom: "4.34%",
    left: "6.62%",
    zIndex: 11,
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.98%",
    height: "8.32%",
  },
  officer1: {
    top: 7,
    zIndex: 12,
    left: 62,
    color: "#001097",
    fontSize: 17,
  },
  officer2: {
    top: 57,
    zIndex: 13,
    left: 62,
    color: "#001097",
    fontSize: 17,
  },
  officer3: {
    top: 107,
    zIndex: 14,
    left: 62,
    color: "#001097",
    fontSize: 17,
  },
  officer4: {
    top: 157,
    zIndex: 15,
    left: 62,
    color: "#001097",
    fontSize: 17,
  },
  officer5: {
    top: 207,
    zIndex: 16,
    left: 62,
    color: "#001097",
    fontSize: 17,
  },
  officer6: {
    top: 257,
    left: 61,
    zIndex: 17,
  },
  text6: {
    top: 26,
    zIndex: 18,
    left: 71,
    color: "#507ffa",
    fontSize: 10,
  },
  text7: {
    top: 76,
    zIndex: 19,
    left: 71,
    color: "#507ffa",
    fontSize: 10,
  },
  text8: {
    top: 126,
    zIndex: 20,
    left: 71,
    color: "#507ffa",
    fontSize: 10,
  },
  text9: {
    top: 176,
    zIndex: 21,
    left: 71,
    color: "#507ffa",
    fontSize: 10,
  },
  text10: {
    top: 226,
    zIndex: 22,
    left: 71,
    color: "#507ffa",
    fontSize: 10,
  },
  text11: {
    top: 276,
    left: 70,
    zIndex: 23,
  },
  rectangleParent: {
    marginLeft: -165,
    top: 180,
    borderWidth: 1,
    alignItems: "flex-end",
    borderColor: "#000",
    borderStyle: "solid",
    width: 330,
    left: "50%",
    position: "absolute",
  },
  directory: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default DIRECTORY;
