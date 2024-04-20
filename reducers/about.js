import * as actionType from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const aboutReducer = (state = {aboutData: {}}, action) => {
  switch (action.type) {
    case actionType.ABOUT:
      return {...state, aboutData: action.data, loading: false, errors: null};
   
    
    default:
      return state;
  }
};

export default aboutReducer;
