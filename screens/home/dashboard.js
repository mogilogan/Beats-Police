import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from 'react-native-vector-icons/Ionicons';

export function HOMEDB({navigation}) {
  return (
    <View style={styles.homeDb}>
      <View style={styles.homeDbChild} />
      <Text style={styles.eBeat}>#E-BEAT</Text>
      <View style={[styles.frame, styles.framePosition]}>
        <IconButton
          icon="person-circle"
          size={20}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>
      <View style={[styles.vectorWrapper, styles.framePosition]}>
        <Icon
          source="person-circle"
          style={styles.vectorIcon3}
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        />
      </View>
      <View style={styles.homeDbItem} />
      <Pressable
        style={[styles.trackingWrapper, styles.wrapperFlexBox]}
        onPress={() => {
          navigation.navigate('Tracking');
        }}>
        <Text style={styles.tracking}>Tracking</Text>
      </Pressable>
      <View style={[styles.dashboardWrapper, styles.homeDbInnerPosition]}>
        <Text style={styles.dashboard}>Dashboard</Text>
      </View>
      <View style={[styles.homeDbInner, styles.homeDbInnerPosition]} />
      <Pressable
        style={[styles.homeDbChild1, styles.homeChildLayout]}
        onPress={() => {
          navigation.navigate('SelectBeat');
        }}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.homeChildLayout]}
        onPress={() => {
          navigation.navigate('ViewBeat');
        }}
      />
      <Pressable
        style={[styles.homeDbChild2, styles.homeChildLayout]}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <Pressable
        style={[styles.homeDbChild3, styles.homeChildLayout]}
        onPress={() => {
          navigation.navigate('ReportBeat');
        }}
      />
      <Text style={[styles.assign, styles.assignTypo]}>Assign</Text>
      <Text style={[styles.view, styles.viewTypo]}>View</Text>
      <Text style={[styles.update, styles.viewTypo]}>Update</Text>
      <Text style={[styles.reports, styles.assignTypo]}>Reports</Text>
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
