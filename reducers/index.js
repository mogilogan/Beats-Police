import {combineReducers} from 'redux';

import auth from './auth';
import about from './about';
import beat from './beat';

export const reducers = combineReducers({auth,about,beat});
