import {REPORT} from '../constants/actionTypes';
import * as api from '../api/index';

export const fetchall = () => async dispatch => {
  try {
    // return token and user details
  
    const {data} = await api.beatReport();
console.log(data);
    dispatch({type: REPORT, data});
   
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      // returns error based on username and password check
      return error.response.data;
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);
      // You might want to return a generic error message or handle it in another way
      return 'An error occurred while processing your request.';
    }
  }
};



export const updateReport = (formData) => async dispatch => {
  console.log(formData);
  try {
    // return token and user details
  
    const {data} = await api.UpdateReport(formData);
    
   
  } catch (error) {
    // check if error has a response property and if response has a data property
    if (error.response && error.response.data) {
      // returns error based on username and password check
      return error.response.data;
    } else {
      // handle other types of errors (e.g., network issues)
      console.error('An error occurred:', error.message);
      // You might want to return a generic error message or handle it in another way
      return 'An error occurred while processing your request.';
    }
  }
};
