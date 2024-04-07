import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {useDispatch} from 'react-redux';

import {signin} from '../../actions/auth';

export function LOGINPAGE({navigation}) {
  const [officer, setOfficer] = React.useState('');
  const [passowrd, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const handlelogin = async () => {
    const form = {officer_id: officer, password: passowrd};
    const mess = await dispatch(signin(form, navigation));
  };

  return (
    <SafeAreaView style={styles.logInPage}>
      <Image
        style={styles.logInPageChild}
        resizeMode="cover"
        source={require('./Polics.png')}
      />
      <View style={[styles.logItem, styles.logInPageChild]} />

      <View style={[styles.component3, styles.componentLayout]}>
        <TextInput
          placeholder="username"
          style={[styles.component3Child]}
          mode="outlined"
          onChangeText={newStatus => setOfficer(newStatus)}
        />
      </View>
      <View style={[styles.component4, styles.componentLayout]}>
        <TextInput
          placeholder="Password"
          style={[styles.component3Child]}
          mode="outlined"
          onChangeText={newStatus => setPassword(newStatus)}
        />
      </View>
      <Button
        mode="contained"
        style={[styles.logInPageItem, styles.logInPageItemBorder]}
        onPress={() => {
          handlelogin();
        }}
        onLongPress={() => {
          navigation.navigate('BeatDashBoard');
        }}>
        LOG IN
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  componentLayout: {
    height: 50,
    left: '50%',
  },
  logItem: {
    backgroundColor: '#033ba6',
    opacity: 0.5,
  },
  logInTypo: {
    textAlign: 'left',
    fontFamily: 'Roboto',
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: 15,
    position: 'absolute',
  },
  logInPageItemBorder: {
    borderStyle: 'solid',
    borderRadius: 50,
    position: 'absolute',
  },
  rectangleViewPosition: {
    height: 25,
    backgroundColor: '#d9d9d9',
    width: 360,
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  logInPageChild: {
    marginTop: -400,
    top: '50%',
    width: 360,
    marginLeft: -180,
    position: 'absolute',
    left: '50%',
    height: 800,
  },
  username: {
    top: '32%',
    left: '10.8%',
    color: '#000',
  },
  component3Child: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  component4: {
    top: 441,
    width: 250,
    marginLeft: -125,
    height: 50,
    position: 'absolute',
  },
  logInPageItem: {
    marginLeft: -50,
    top: 662,
    backgroundColor: 'rgba(199, 86, 86, 0.5)',
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 50,
    left: '50%',
  },
  component3: {
    top: 364,
    width: 250,
    marginLeft: -125,
    height: 50,
    position: 'absolute',
  },
  logIn: {
    marginLeft: -25,
    top: 678,
    color: '#fff',
    left: '50%',
    fontFamily: 'Roboto',
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: 15,
  },
  logInPageInner: {
    top: 0,
  },
  rectangleView: {
    bottom: 0,
  },
  logInPage: {
    backgroundColor: '#3a62ae',
    flex: 1,
    overflow: 'hidden',
    height: 800,
    width: '100%',
  },
});

export default LOGINPAGE;
