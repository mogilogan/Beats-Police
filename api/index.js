import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API = axios.create({baseURL: 'http://10.0.2.2:8000'});

API.interceptors.request.use(req => {
  if (AsyncStorage.getItem('beatsauth')) {
    req.headers.Authorization = `Bearer ${
      AsyncStorage.getItem('beatsauth').token
    }`;
  }

  return req;
});

// login api
export const signIn = formData => API.post('/logins', formData);
export const aboutUser = formData => API.post('/about', formData);
export const CheckAssign = formData => API.post('/assign/check',formData);
export const assignPc = formData => API.post('/assign',formData);


