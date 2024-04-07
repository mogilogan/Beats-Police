import {AUTH, ABOUT} from '../constants/actionTypes';
import * as api from '../api/index';

export const aboutuser = (formData, setError) => async dispatch => {
  try {
    console.log(formData);
    const {data} = await api.aboutUser(formData);
    console.log(data);

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
