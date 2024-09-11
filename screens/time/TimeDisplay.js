// TimeDisplay.js
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const TimeDisplay = () => {
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <View className="absolute top-0 left-0 right-0 p-2 bg-gray-900">
      <Text className="text-sm text-right text-white">Today: {dt}</Text>
    </View>
  );
};

export default TimeDisplay;
