import { combineReducers } from 'redux';
import {registration} from './registration'
import {authentication} from './login'
import {items} from './table'


const rootReducer = combineReducers({
    registration,
    authentication,
    items,
});

export default rootReducer;