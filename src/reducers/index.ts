import { countersReducer } from './counter-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    counterState: countersReducer,
})