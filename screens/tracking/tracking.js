//HomeTracking
import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

export function TRACKING({navigation}) {
  return (
    <View style={styles.homeTracking}>
      <View
        style={styles.homeTrackingChild}
        className="w-full scale-150 -translate-y-1"
      />
      <Text style={styles.eBeat} className="font-extrabold">
        E-BEAT
      </Text>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => {}}>
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={[styles.vectorWrapper, styles.framePosition]}>
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </View>
      <View
        style={[styles.homeTrackingItem, styles.homePosition]}
        className="scale-125 -translate-y-1"
      />
      <View style={[styles.trackingWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.tracking}>Tracking</Text>
      </View>
      <Pressable
        style={[styles.dashboardWrapper, styles.wrapperFlexBox]}
        onPress={() => {
          navigation.navigate('dashBoard');
        }}>
        <Text style={[styles.dashboard, styles.viewTypo]}>Dashboard</Text>
      </Pressable>
      <View style={styles.homeTrackingInner} />
      <Text style={[styles.view, styles.viewTypo]}>View</Text>

      <View style={[styles.homeTrackingChild1, styles.rectangleViewPosition]} />
      <Image
        style={styles.image1Icon}
        resizeMode="cover" /*source="image 1.png"*/
      />
      <View
        style={[styles.homeTrackingChild2, styles.homePosition]}
        className="scale-110"
      />
      <Text
        style={[styles.searchOfficer, styles.viewTypo]}
        className="translate-x-2 font-bold">
        Search officer...
      </Text>
      <Image
        style={styles.searchoutlineIcon}
        resizeMode="cover" /*source="SearchOutline.png"*/
      />
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
  homePosition: {
    height: 50,
    left: '50%',
    position: 'absolute',
  },
  wrapperFlexBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 50,
    top: 100,
    flexDirection: 'row',
    position: 'absolute',
  },
  viewTypo: {
    color: '#fff',
    fontFamily: 'Roboto',
    textAlign: 'left',
  },
  rectangleViewPosition: {
    height: 25,
    backgroundColor: '#d9d9d9',
    width: 360,
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  homeTrackingChild: {
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
  homeTrackingItem: {
    top: 100,
    height: 50,
    width: 360,
    backgroundColor: '#8b98d8',
    marginLeft: -180,
  },
  tracking: {
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    fontSize: 20,
    textAlign: 'left',
    color: '#000',
  },
  trackingWrapper: {
    left: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboard: {
    letterSpacing: 1.2,
    fontSize: 20,
    color: '#fff',
  },
  dashboardWrapper: {
    right: 0,
  },
  homeTrackingInner: {
    top: 145,
    backgroundColor: '#0400c5',
    height: 5,
    width: 180,
    left: 0,
    position: 'absolute',
  },
  view: {
    top: 365,
    left: 30,
    fontSize: 25,
    letterSpacing: 1.3,
    textTransform: 'capitalize',
    position: 'absolute',
  },
  rectangleView: {
    top: 0,
  },
  homeTrackingChild1: {
    bottom: 0,
  },
  image1Icon: {
    marginLeft: -170,
    top: 242,
    width: 340,
    height: 466,
    left: '50%',
    position: 'absolute',
  },
  homeTrackingChild2: {
    marginLeft: -165,
    top: 170,
    borderRadius: 50,
    backgroundColor: 'rgba(124, 136, 240, 0.75)',
    width: 330,
  },
  searchOfficer: {
    top: 187,
    left: 33,
    fontSize: 15,
    letterSpacing: 0.9,
    position: 'absolute',
  },
  searchoutlineIcon: {
    top: 183,
    left: 298,
    width: 24,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  homeTracking: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default TRACKING;
