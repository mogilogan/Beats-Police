import * as actionType from '../constants/actionTypes';


const checkReducer = (state = {beatData: [],available:[],checkData:{}}, action) => {
  switch (action.type) {
   
      case actionType.BEAT_FETCH:
      return {...state, beatData: action.data, loading: false, errors: null};
      case actionType.BEAT_AVAILABLE:
      return {...state, available: action.data, loading: false, errors: null};
      case actionType.BEAT_ASSIGNED:
      return {...state, checkData: action.data[0], loading: false, errors: null};
    
    default:
      return state;
  }
};

export default checkReducer;
