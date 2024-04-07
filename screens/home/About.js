//Notification
import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {aboutuser} from '../../actions/about';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NOTIFICATIONS = ({navigation}) => {
  const {aboutData} = useSelector(state => state.about);
  const dispatch = useDispatch();
  const [id,setID]=React.useState();
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("ok")
        const user = JSON.parse(await  AsyncStorage.getItem('beatsauth'));
        const officerId = user?.userData?.Officer_Id; // Make sure userData is parsed if it's a string
        console.log(officerId);
        setID(officerId);
        if (officerId) {
          const formData = {"officer_id":officerId}
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
    <View>
      <Text>{aboutData?.Officer_Name}</Text>
      <Text> {error}</Text>
    </View>
  );
};

export default NOTIFICATIONS;
