import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API = axios.create({baseURL: 'https://kvmsyxjgt4.execute-api.ap-south-1.amazonaws.com'});

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



export const beatFetch = () => API.get('/assign/check');
export const beatRemove = formData => API.post('/assign/remove',formData);
export const beatAvailable = () => API.get('/assign/available');
export const beatUpdate = formData => API.post('/assign/update',formData);

export const beatAssigned = formData => API.post('/assign/assigned',formData);

export const beatReport = formData => API.get('/report/all');

export const UpdateReport = formData => API.post('/report/add',formData);




