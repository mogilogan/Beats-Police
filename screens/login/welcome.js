import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function WELCOME({ navigation }) {
  return (
    <SafeAreaView style={styles.welcomePage}>
      <Image
        style={styles.welcomePosition}
        resizeMode="cover"
        source={require("./Polics.png")}
      />
      <View style={[styles.welcomePageItem, styles.welcomePosition]} />
      <Text style={[styles.eBeat, styles.eBeatFlexBox]}>#E-BEAT</Text>
      <View style={[styles.rectangleParent]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("./lion.png")}
        />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text
          style={[styles.puducherryPoliceGovernment1, styles.eBeatFlexBox]}
          onPress={() => {
            navigation.navigate("LoginPage");
          }}
        >{`Puducherry Police
          					Government of 
                         Puducherry `}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomePosition: {
    width: 360,
    marginLeft: -180,
    marginTop: -400,
    position: "absolute",
    left: "50%",
    top: "50%",
    height: 820,
  },
  eBeatFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    height: 61,
    position: "absolute",
  },
  welcomePageItem: {
    backgroundColor: "#033ba6",
    opacity: 0.5,
  },
  eBeat: {
    marginTop: -20,
    marginLeft: -117,
    fontSize: 40,
    letterSpacing: 2.4,
    fontFamily: "Roboto",
    color: "#fff",
    width: 233,
    left: "50%",
    top: "50%",
    textAlign: "left",
  },
  groupChild: {
    left: 0,
    backgroundColor: "transparent",
    width: 150,
  },
  groupItem: {
    left: 2,
    width: 39,
  },
  groupInner: {
    left: 43,
    backgroundColor: "#000",
    width: 1,
  },
  puducherryPoliceGovernment1: {
    top: 8,
    left: 46,
    fontSize: 12,
    letterSpacing: 0.7,
    lineHeight: 11,
    fontFamily: "Roboto",
    color: "#050505",
    width: 119,
    height: 52,
  },
  rectangleParent: {
    top: 693,
    left: 97,
    width: 165,
    height: 61,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default WELCOME;
