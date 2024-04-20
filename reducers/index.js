import {combineReducers} from 'redux';

import auth from './auth';
import about from './about'
import check from './check'

export const reducers = combineReducers({auth,about,check});
