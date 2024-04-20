import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import io from 'socket.io-client';

const Tracking = () => {
  const [socket, setSocket] = useState(null);
  const [workers, setWorkers] = useState([]);

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
    if (socket) {
      socket.on('currentLocations', locations => {
        setWorkers(Object.values(locations)); // Assuming locations is an object with worker IDs as keys
      });
    }
  }, [socket]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 0, longitude: 0, latitudeDelta: 10, longitudeDelta: 10 }}>
        {workers.map((worker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: worker.latitude, longitude: worker.longitude }}
            title={`Worker ${index + 1}`}
          />
        ))}
      </MapView>
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

export default Tracking;
