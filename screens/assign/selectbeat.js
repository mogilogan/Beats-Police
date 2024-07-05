import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, Pressable, Modal} from 'react-native';
import {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons'

import {beat, beat_subdivision,officers} from './data';
import { Button } from 'react-native-paper';
import { beatavailable, beatfetch, beatremove, beatupdate } from '../../actions/about';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';



export function SELECTBEAT({navigation}) {


  const {beatData,available} = useSelector(state => state.beat);
  const [user, setUser] = React.useState({});
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const [time,setTime] = useState();
  const [beat,setBeat] = useState();




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

useFocusEffect(
  React.useCallback(() => {
    fetchbeat();
    return () => {
      // Any cleanup would go here
    };
  }, [dispatch, navigation]),
);;

const fetchbeat = async () => {
  try {
    console.log("ok");
   await dispatch(beatfetch());
  } catch (error) {
    // Handle or log error
    console.error('Failed to fetch data:', error);
  }
};


const handleRemove=(beat,officer_id,time)=>{
const formData = {beat:beat,officer_id:officer_id,time:time};
dispatch(beatremove(formData));
}

const handleAvailable= async()=>{

    await dispatch(beatavailable());
  }

  const handleUpdate =async(officer_name,officer_id)=>{
    const formData = {officer_id:officer_id,officer_name:officer_name,beat:beat,time:time}
    await dispatch(beatupdate(formData));
  }



  return (
    <SafeAreaView className="w-full">
    <ScrollView className=" w-full gap-6">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-7">E-BEAT</Text>
      </View>


     

<View>
    {beatData?.map((beat,id)=>(
        <View key={id} className=" flex flex-row text-lg gap-4 font-extrabold">
          <Text> Beat: {beat.beat}</Text>
          <Text>{beat.officer_id}</Text> 
          <Text>{beat.Officer_name}</Text>
          {beat?.officer_id==="" ?  <Icon onPress={async ()=>{
            setBeat(beat.beat);
            setTime(beat.time);
            handleAvailable(beat.beat,beat.time);
            setModalVisible(!modalVisible);
          }} name="add-circle-outline" size={30} color="#25b84c"></Icon> :           
          <Icon onPress={()=>{
            handleRemove(beat.beat,beat.officer_id,beat.time);
          }} name="remove-circle-outline" size={30} color="#900"></Icon>}
          
        </View>
    ))}
     </View>
      <View>
    </View>
    
    </ScrollView>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <ScrollView className="flex-1 mt-24">
      <View style={styles.modalView}>

         <View className="flex w-full justify-center items-center">
    <View className="w-[80%] flex justify-center">
    {available?.map((beat,id)=>(
        <View key={id}  className="  pb-2 flex flex-row text-lg gap-4 font-extrabold">
        
          <Text className=" bg-red-800">{beat.Officer_Id}</Text> 
          <Text className=" bg-red-800">{beat.Officer_Name}</Text>
          <Button
        mode="contained"
        onPress={()=>{
          console.log("Pressed" + beat.beat)
          handleUpdate(beat.Officer_Name,beat.Officer_Id);
          setModalVisible(!modalVisible);
        }}
       >
        Add!
      </Button>
         
          
        </View>
    ))}
    </View>
  </View> 

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
            <View>
    
     </View>
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>
      </View>
    </ScrollView>
  </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SELECTBEAT;

