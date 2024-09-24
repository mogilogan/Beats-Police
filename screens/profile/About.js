//Notification
import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {aboutuser} from '../../actions/about';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
const NOTIFICATIONS = ({navigation}) => {
  const {aboutData} = useSelector(state => state.about);
  const dispatch = useDispatch();
  const [id, setID] = React.useState();
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('ok');
        console.log(aboutData);
        const user = JSON.parse(await AsyncStorage.getItem('beatsauth'));
        const officerId = user?.userData?.Officer_Id; // Make sure userData is parsed if it's a string
        console.log(officerId);
        setID(officerId);
        if (officerId) {
          const formData = {officer_id: officerId};
          dispatch(aboutuser(formData, setError));
        }
      } catch (error) {
        setError('Failed to fetch user data');
        console.error(error);
      }
    };

    fetchUser();
  }, [dispatch]);
  return (
    <View className="flex-1 justify-center items-center w-screen bg-[#e7f1fd]">
      <View className="flex flex-row ">
        <Text className="text-black text-3xl  font-bold">About Officer</Text>
      </View>
      <Image
        className="max-w-[50%] max-h-[40%]"
        resizeMode="contain"
        source={require('./profile.png')}
      />
      <View className="flex  items-center gap-4 mx-4 bg-slate-500 rounded-2xl">
        <View className="flex flex-row  bg-slate-300 p-2 mx-4 rounded-xl">
          <Text className="text-black text-lg w-[50%] font-bold">Name : </Text>
          <Text className="text-black text-lg w-[50%]">
            {aboutData?.Officer_Name}
          </Text>
        </View>
        <View className="flex flex-row  bg-slate-300 p-2 mx-4 rounded-xl">
          <Text className="text-black text-lg w-[50%] font-bold">
            Designation :{' '}
          </Text>
          <Text className="text-black text-lg w-[50%]">
            {aboutData?.Designation}
          </Text>
        </View>
        <View className="flex flex-row  bg-slate-300 p-2 mx-4 rounded-xl">
          <Text className="text-black text-lg w-[50%] font-bold">
            Officer Id :{' '}
          </Text>
          <Text className="text-black text-lg w-[50%]">
            {aboutData?.Officer_Id}
          </Text>
        </View>
        <View className="flex flex-row  bg-slate-300 p-2 mx-4 rounded-xl">
          <Text className="text-black text-lg w-[50%] font-bold">
            Phone No. :{' '}
          </Text>
          <Text className="text-black text-lg w-[50%]">
            {aboutData?.PhoneNumber}
          </Text>
        </View>

        <Text> {error}</Text>
      </View>
    </View>
  );
};

export default NOTIFICATIONS;
