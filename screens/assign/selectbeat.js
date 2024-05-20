import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'
import {beat, beat_subdivision,officers} from './data';
import { Button } from 'react-native-paper';
import { assginpc } from '../../actions/about';

import AsyncStorage from '@react-native-async-storage/async-storage';
import babelConfig from '../../babel.config';
import { useDispatch } from 'react-redux';


export function SELECTBEAT({navigation}) {
  const [startdate, setStartDate] = useState(new Date())
  const [enddate, setEndDate] = useState(new Date())
  const [error,setError] = useState("");
  
  const [pc, setPc] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [location, setLocation] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  
  const [user, setUser] = React.useState({});
  const dispatch = useDispatch();

  const findArea = index => {
    if (beat_subdivision[index] != -1) {
      return beat_subdivision[index];
    } else {
      return null;
    }
  };


  React.useEffect(() => {
    const fetchData = async () => {
      const userData = await AsyncStorage.getItem('beatsauth');

      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        navigation.navigate('LoginPage');
      }
    };

    fetchData();
  }, []);




  const handleAssign =()=>{
console.log("ok")
    const formData = {
      "assigned_by":user?.userData.Officer_Id,
      "Station_id":user?.userData.Station_id,
      "beat":value,
      "hamplets":value1,
      "start_time":startdate,
      "end_time":enddate,
      "coordi":location,
      "Officer_Id":pc
    }

    dispatch(assginpc(formData,setError,navigation))
    
  }

  return (
    <SafeAreaView className="w-full">
    <ScrollView className=" w-full gap-6">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-7">E-BEAT</Text>
      </View>
      <View className="flex w-full justify-center items-center">
        <View className="w-[80%] flex justify-center">
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={beat}
        
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Beat' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>

      {beat_subdivision[value] &&
    <View className="flex w-full justify-center items-center">
        <View className="w-[80%] flex justify-center">
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={beat_subdivision[value]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Beat' : '...'}
            searchPlaceholder="Search..."
            value={value1}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue1(item.value);
              setLocation(item.location.join(','));
              setIsFocus(false);
            }}
          />
        </View>
      </View>}

      <View className="flex w-full justify-center items-center">
        <View className="w-[80%] flex justify-center">
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={officers}
        
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Officer' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setPc(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
      <View>
       
      <Text>Start Time: </Text>
      <DatePicker date={startdate} mode='datetime' minimumDate={new Date()}  onDateChange={setStartDate} />
      <Text>End Time: </Text>
      <DatePicker date={enddate} mode='datetime' minimumDate={new Date()}  onDateChange={setEndDate} />
    
    </View>
    <Button
        mode="contained"
       
        onPress={() => {
          handleAssign();
        }}
       >
        Assign
      </Button>
    </ScrollView>
    </SafeAreaView>
  );
}

export default SELECTBEAT;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});