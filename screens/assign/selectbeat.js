import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

export function SELECTBEAT({navigation}) {
  return (
    <View style={styles.assignPage1}>
      <View className="w-full  h-[100px] absolute bg-[#8b98d8]" />
      <Text className="text-3xl font-bold text-black absolute top-[47px] left-[50px]">
        E-BEAT
      </Text>

      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={styles.selectBeat}>Select Beat</Text>
      <View className="ml-5">
        <Pressable
          className="h-[100px] w-[158px] bg-[#bbc7e7] rounded-xl top-[200] left-[15]"
          onPress={() => {}}
        />
        <Pressable
          style={[styles.assignPage1Child1, styles.assignChildLayout1]}
          onPress={() => {}}
        />
        <Pressable
          style={[styles.assignPage1Child2, styles.assignChildLayout1]}
          onPress={() => {}}
        />
        <Pressable
          style={[styles.assignPage1Child3, styles.assignChildLayout]}
          onPress={() => {}}
        />
        <Pressable
          style={[styles.assignPage1Child4, styles.assignChildLayout]}
          onPress={() => {}}
        />
        <Text style={[styles.beat1, styles.beatTypo1]}>BEAT-1</Text>
        <Text style={[styles.beat3, styles.beatTypo1]}>BEAT-3</Text>
        <Text style={[styles.beat5, styles.beatTypo1]}>BEAT-5</Text>
        <Text style={[styles.beat2, styles.beatTypo]}>BEAT-2</Text>
        <Text style={[styles.beat4, styles.beatTypo]}>BEAT-4</Text>
      </View>
      <View style={[styles.assignPage1Child5, styles.rectangleViewPosition]} />
      <Pressable
        style={styles.confirm}
        onPress={() => {
          navigation.navigate('SelectHamplets');
        }}>
        <Text style={[styles.confirm1, styles.beatTypo1]} className="ml-6">
          CONFIRM
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  assignPosition: {
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
  rectangleViewPosition: {
    height: 50,
    left: '50%',
    position: 'absolute',
  },
  assignChildLayout1: {
    height: 100,
    width: 158,
    borderRadius: 10,
    backgroundColor: '#bbc7e7',
    position: 'absolute',
  },
  assignChildLayout: {
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
    textAlign: 'left',
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
  assignPage1Child: {
    top: 0,
  },
  assignPage1Item: {
    bottom: 0,
  },

  eBeat: {
    marginLeft: -120,
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: 'Roboto',
    color: '#000',
    width: 160,
    textAlign: 'left',
    top: 47,
    left: '50%',
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
    backgroundColor: '#bbc7e7',
    height: 50,
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
  assignPage1Child1: {
    top: 312,
    left: 15,
    width: 158,
    borderRadius: 10,
  },
  assignPage1Child2: {
    top: 427,
    left: 14,
  },
  assignPage1Child3: {
    top: 197,
  },
  assignPage1Child4: {
    top: 312,
  },
  beat1: {
    left: 47,
    color: '#fff',
    letterSpacing: 1.5,
    fontSize: 25,
    position: 'absolute',
    top: 232,
  },
  beat3: {
    top: 347,
    left: 47,
    color: '#fff',
    letterSpacing: 1.5,
    fontSize: 25,
    position: 'absolute',
  },
  beat5: {
    top: 462,
    left: 46,
    letterSpacing: 1.5,
    fontSize: 25,
    color: '#fff',
    position: 'absolute',
  },
  beat2: {
    top: 232,
  },
  beat4: {
    top: 347,
  },
  assignPage1Child5: {
    marginLeft: -100,
    top: 630,
    borderRadius: 100,
    backgroundColor: '#f98484',
    width: 200,
  },
  confirm1: {
    fontSize: 20,
    letterSpacing: 1.2,
  },
  confirm: {
    left: 128,
    top: 643,
    position: 'absolute',
  },
  assignPage1: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default SELECTBEAT;
