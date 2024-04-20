import * as actionType from '../constants/actionTypes';


const checkReducer = (state = {checkData: {}}, action) => {
  switch (action.type) {
   
      case actionType.CHECK:
      return {...state, checkData: action.data, loading: false, errors: null};
    
    default:
      return state;
  }
};

export default checkReducer;
