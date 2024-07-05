import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import io from 'socket.io-client';
import DropDownPicker from 'react-native-dropdown-picker';

const Fetch = ({user,beat}) => {
  const [socket, setSocket] = useState(null);
  const [workers, setWorkers] = useState([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [time,setTime] = useState(0);
  
  const [selectedbeat,setSelectedbeat] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const dataByTime = {
    1: beat.filter(item => item.time === 1),
    2: beat.filter(item => item.time === 2),
    3: beat.filter(item => item.time === 3)
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
    }, 1000 * 60); // Update every minute

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


  const getTimeBasedValue = (currentDate) => {
    const hours = currentDate.getHours();
    if (hours >= 8 && hours < 16) {
      setValue(2);
    } else if (hours >= 16 && hours < 24) {
        setValue(3);
    } else {
        setValue(1);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 11.943377, longitude: 79.807210, latitudeDelta: 10, longitudeDelta: 10 }}>
        {workers.map((worker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: worker.latitude, longitude: worker.longitude }}
            title={`Worker ${index + 1}`}
          />
        ))}
      </MapView>
      <View className="w-[80%] flex justify-center">
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});

export default Fetch;
