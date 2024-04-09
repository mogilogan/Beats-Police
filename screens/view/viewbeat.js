import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

export function VIEWBEAT({navigation}) {
  return (
    <View style={styles.viewPage1} className="w-screen">
      <View
        style={styles.viewPage1Inner}
        className="w-[100%] h-[100px] absolute bg-[#8b98d8]"
      />
      <Text className="text-3xl font-bold text-black absolute top-[47px] left-[50px]">
        E-BEAT
      </Text>
      <Pressable
        style={[styles.frame, styles.vectorPosition]}
        onPress={() => {}}>
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
        onPress={() => {}}>
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={styles.selectBeat}>Select Beat</Text>
      <View className=" ml-5">
        <Pressable
          style={[styles.rectanglePressable, styles.viewChildLayout1]}
          onPress={() => {
            navigation.navigate('ViewDetails');
          }}
        />
        <Pressable
          style={[styles.viewPage1Child1, styles.viewChildLayout1]}
          onPress={() => {
            navigation.navigate('ViewDetails');
          }}
        />
        <Pressable
          style={[styles.viewPage1Child2, styles.viewChildLayout1]}
          onPress={() => {
            navigation.navigate('ViewDetails');
          }}
        />
        <Pressable
          style={[styles.viewPage1Child3, styles.viewChildLayout]}
          onPress={() => {
            navigation.navigate('ViewDetails');
          }}
        />
        <Pressable
          style={[styles.viewPage1Child4, styles.viewChildLayout]}
          onPress={() => {
            navigation.navigate('ViewDetails');
          }}
        />
      </View>
      <Text style={[styles.beat1, styles.beatTypo1]} className="ml-5">
        BEAT-1
      </Text>
      <Text style={[styles.beat3, styles.beatTypo1]} className="ml-5">
        BEAT-3
      </Text>
      <Text style={[styles.beat5, styles.beatTypo1]} className="ml-5">
        BEAT-5
      </Text>
      <Text style={[styles.beat2, styles.beatTypo]} className="ml-5">
        BEAT-2
      </Text>
      <Text style={[styles.beat4, styles.beatTypo]} className="ml-5">
        BEAT-4
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPosition: {
    height: 25,
    backgroundColor: '#d9d9d9',
    width: 360,
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  vectorPosition: {
    padding: 5,
    flexDirection: 'row',
    top: 47,
    position: 'absolute',
  },
  viewChildLayout1: {
    height: 100,
    width: 158,
    borderRadius: 10,
    backgroundColor: '#bbc7e7',
    position: 'absolute',
  },
  viewChildLayout: {
    left: 188,
    height: 100,
    width: 158,
    borderRadius: 10,
    backgroundColor: '#bbc7e7',
    position: 'absolute',
  },
  beatTypo1: {
    color: '#fff',
    fontFamily: 'Roboto',
    letterSpacing: 1.5,
    fontSize: 25,
    textAlign: 'left',
    position: 'absolute',
  },
  beatTypo: {
    left: 220,
    color: '#fff',
    fontFamily: 'Roboto',
    letterSpacing: 1.5,
    fontSize: 25,
    textAlign: 'left',
    position: 'absolute',
  },
  viewPage1Child: {
    top: 0,
  },
  viewPage1Item: {
    bottom: 0,
  },
  eBeat: {
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: 'Roboto',
    width: 160,
    top: 47,
    position: 'absolute',
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
    borderRadius: 50,
    width: 350,
    height: 50,
    backgroundColor: '#bbc7e7',
    left: '50%',
    position: 'absolute',
  },
  selectBeat: {
    marginLeft: -75,
    top: 125,
    color: '#001097',
    fontFamily: 'Roboto',
    letterSpacing: 1.5,
    fontSize: 25,
    textAlign: 'left',
    left: '50%',
    position: 'absolute',
  },
  rectanglePressable: {
    left: 15,
    width: 158,
    borderRadius: 10,
    top: 197,
  },
  viewPage1Child1: {
    top: 312,
    left: 15,
    width: 158,
    borderRadius: 10,
  },
  viewPage1Child2: {
    top: 427,
    left: 14,
  },
  viewPage1Child3: {
    top: 197,
  },
  viewPage1Child4: {
    top: 312,
  },
  beat1: {
    left: 47,
    color: '#fff',
    top: 232,
  },
  beat3: {
    top: 347,
    left: 47,
    color: '#fff',
  },
  beat5: {
    top: 462,
    left: 46,
  },
  beat2: {
    top: 232,
  },
  beat4: {
    top: 347,
  },
  viewPage1: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default VIEWBEAT;
