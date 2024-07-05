import {AUTH, ABOUT, BEAT_AVAILABLE,BEAT_FETCH,BEAT_REMOVE,BEAT_UPDATE, BEAT_ASSIGNED} from '../constants/actionTypes';
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

export const beatfetch = () => async dispatch => {
  
  try {
    const {data} = await api.beatFetch();
    dispatch({type: BEAT_FETCH, data});
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      console.error('An error occurred:', error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);
    }
  }
};


export const beatavailable = () => async dispatch => {
  try {
    const {data} = await api.beatAvailable();

    dispatch({type: BEAT_AVAILABLE, data});
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      console.error('An error occurred:', error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
    }
  }
};



export const beatremove = (formData) => async dispatch => {
  try {
    const {data} = await api.beatRemove(formData);
    dispatch(beatfetch());
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      console.error('An error occurred:', error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
    }
  }
};


export const beatupdate = (formData) => async dispatch => {
  try {
    const {data} = await api.beatUpdate(formData);
    dispatch(beatfetch());
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      console.error('An error occurred:', error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
    }
  }
};



export const beatassigned = (formData) => async dispatch => {
  try {
    const {data} = await api.beatAssigned(formData);
    console.log(data);
    console.log("hey")
    dispatch({type: BEAT_ASSIGNED, data});
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      console.error('An error occurred:', error.response.data);
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);

      // You might want to return a generic error message or handle it in another way
    }
  }
};

