import * as actionType from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case actionType.AUTH:
      AsyncStorage.setItem('beatsauth', JSON.stringify({...action?.data}));
      return {...state, authData: action.data, loading: false, errors: null};
    case actionType.LOGOUT:
      AsyncStorage.removeItem('beatsauth');

      return {...state, authData: null, loading: false, errors: null};
    default:
      return state;
  }
};

export default authReducer;
