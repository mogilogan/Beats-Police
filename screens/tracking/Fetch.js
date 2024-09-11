import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import io from 'socket.io-client';

import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const datass = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const Fetch = ({user, beat}) => {
  const [socket, setSocket] = useState(null);
  const [workers, setWorkers] = useState([]);

  const [value, setValue] = useState(null);
  const [label, setLabel] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log(value);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && {color: 'gray', fontWeight: 'bold'},
          ]}></Text>
      );
    }
    return null;
  };

  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedbeat, setSelectedbeat] = useState(1);

  const dataByTime = {
    1: beat.filter(item => item.time === 1),
    2: beat.filter(item => item.time === 2),
    3: beat.filter(item => item.time === 3),
  };

  useEffect(() => {
    const newSocket = io('http://10.0.2.2:8000');
    setSocket(newSocket);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      getTimeBasedValue(currentDate);
    }, 1000 * 10); // Update every minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('currentLocations', locations => {
        setWorkers(Object.values(locations)); // Assuming locations is an object with worker IDs as keys
      });
    }
  }, [socket]);

  const getTimeBasedValue = currentDate => {
    const hours = currentDate.getHours();
    if (hours >= 8 && hours < 16) {
      setTime(2);
    } else if (hours >= 16 && hours < 24) {
      setTime(3);
    } else {
      setTime(1);
    }
  };

  return (
    <View className="flex-1 gap-5 items-center text-black">
      <Dropdown
        style={[isFocus && {borderColor: '#404e5a'}]}
        className="border-2  w-[90%] bg-[#404e5a]/80 px-5 text-black text-xl"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={workers}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Beat' : ''}
        value={value}
        itemTextStyle={{color: 'black'}}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setLabel(item.label);
          setIsFocus(false);
        }}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 11.943377,
          longitude: 79.80721,

          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        {value?.latitude && (
          <Marker
            coordinate={{
              latitude: value.latitude ? value.latitude : 0,
              longitude: value.longitude ? value.longitude : 0,
            }}
            title={value != null ? label : ''}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 60,
    color: 'black',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#404e5a',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 15,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default Fetch;
