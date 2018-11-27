

import {combineReducers} from 'redux';
import Reducers from './Reducers';

const rootReducer = combineReducers({
    scanState: Reducers
});

export default rootReducer;