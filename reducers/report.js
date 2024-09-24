import * as actionType from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const aboutReducer = (state = {reportData: []}, action) => {
  switch (action.type) {
    case actionType.REPORT:
      return {...state, reportData: action.data.results, loading: false, errors: null};
   
    
    default:
      return state;
  }
};

export default aboutReducer;
