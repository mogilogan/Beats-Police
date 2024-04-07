import {combineReducers} from 'redux';

import auth from './auth';
import about from './about'

export const reducers = combineReducers({auth,about});
