import {AUTH, ABOUT, CHECK} from '../constants/actionTypes';
import * as api from '../api/index';

export const aboutuser = (formData, setError) => async dispatch => {
  try {
   
    const {data} = await api.aboutUser(formData);
   

    dispatch({type: ABOUT, data});
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      setError(error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
      setError('An error occurred while processing your request.');
    }
  }
};

export const checkassign = (formData, setError) => async dispatch => {
  
  try {
    const {data} = await api.CheckAssign(formData);
    
    console.log("ok");
    dispatch({type: CHECK, data});
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      setError(error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
      setError('An error occurred while processing your request.');
    }
  }
};

export const assginpc = (formData, setError,navigation) => async () => {
  
  try {
    const {data} = await api.assignPc(formData);
    
    console.log(data);
    navigation.goBack();

  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      setError(error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
      setError('An error occurred while processing your request.');
    }
  }
};