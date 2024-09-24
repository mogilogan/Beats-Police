import {combineReducers} from 'redux';

import auth from './auth';
import about from './about';
import beat from './beat';
import report from './report'

export const reducers = combineReducers({auth,about,beat,report});
