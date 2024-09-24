import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable,BackHandler,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from 'react-native-vector-icons/Ionicons';

export function HOMEDB({navigation}) {
  

  return (
    <View className="flex justify-center items-center w-full h-[500px] ">
        <View className="w-screen flex gap-10 justify-center items-center">
          <View className="w-[80%] flex justify-center items-center bg-[#9ca7dd] h-[100px] rounded-xl">
            <Pressable
              className="w-full h-full justify-center items-center"
              onPress={() => {
                navigation.navigate('SelectBeat');
              }}>
              <Text className="text-xl font-bold">Beat Details</Text>
            </Pressable>
          </View>
          <View className="w-[80%] flex justify-center items-center bg-[#9ca7dd] h-[100px] rounded-xl">
            <Pressable
              className="w-full h-full justify-center items-center"
              onPress={() => {
                navigation.navigate('ReportBeat');
              }}>
              <Text className="text-xl font-bold">Reports</Text>
            </Pressable>
          </View>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
  framePosition: {
    padding: 5,
    flexDirection: 'row',
    top: 47,
    position: 'absolute',
  },
  wrapperFlexBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    top: 100,
    flexDirection: 'row',
  },
  homeDbInnerPosition: {
    right: 0,
    width: 180,
    position: 'absolute',
  },
  homeChildLayout: {
    height: 125,
    backgroundColor: '#bbc7e7',
    borderRadius: 20,
    left: '50%',
    position: 'absolute',
  },
  assignTypo: {
    textTransform: 'capitalize',
    letterSpacing: 1.3,
    fontSize: 25,
    left: 30,
    color: '#fff',
    fontFamily: 'Roboto',
    textAlign: 'left',
    position: 'absolute',
  },
  viewTypo: {
    top: 365,
    textTransform: 'capitalize',
    letterSpacing: 1.3,
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Roboto',
    textAlign: 'left',
    position: 'absolute',
  },
  homeDbChild4Position: {
    height: 25,
    backgroundColor: '#d9d9d9',
    width: 360,
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  homeDbChild: {
    top: 25,
    height: 75,
    width: 360,
    backgroundColor: '#8b98d8',
    marginLeft: -180,
    left: '50%',
    position: 'absolute',
  },
  eBeat: {
    marginLeft: -160,
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: 'Roboto',
    width: 160,
    textAlign: 'left',
    color: '#000',
    top: 47,
    left: '50%',
    position: 'absolute',
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
    height: 50,
    top: 100,
    width: 360,
    backgroundColor: '#8b98d8',
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  tracking: {
    color: '#fff',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    fontSize: 20,
    textAlign: 'left',
  },
  trackingWrapper: {
    left: 0,
    width: 180,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  dashboard: {
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    fontSize: 20,
    textAlign: 'left',
    color: '#000',
  },
  dashboardWrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    top: 100,
    flexDirection: 'row',
  },
  homeDbInner: {
    top: 145,
    backgroundColor: '#0400c5',
    height: 5,
  },
  homeDbChild1: {
    top: 170,
    width: 330,
    height: 125,
    backgroundColor: '#bbc7e7',
    borderRadius: 20,
    marginLeft: -165,
  },
  rectanglePressable: {
    width: 155,
    top: 315,
    height: 125,
    backgroundColor: '#bbc7e7',
    borderRadius: 20,
    marginLeft: -165,
  },
  homeDbChild2: {
    marginLeft: 10,
    width: 155,
    top: 315,
    height: 125,
    backgroundColor: '#bbc7e7',
    borderRadius: 20,
  },
  homeDbChild3: {
    top: 460,
    width: 330,
    height: 125,
    backgroundColor: '#bbc7e7',
    borderRadius: 20,
    marginLeft: -165,
  },
  assign: {
    top: 220,
  },
  view: {
    left: 30,
    top: 365,
  },
  update: {
    left: 205,
  },
  reports: {
    top: 510,
  },
  rectangleView: {
    top: 0,
  },
  homeDbChild4: {
    bottom: 0,
  },
  homeDb: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
  },
});

export default HOMEDB;
