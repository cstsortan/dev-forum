// import { countersReducer } from './counter-reducer';
import { combineReducers } from 'redux';
import { routerReducer } from './router-reducer';
import { layoutReducer } from './layout-reducer';
import { authReducer } from './auth-reducer';

export const rootReducer = combineReducers({
    // counterState: countersReducer,
    router: routerReducer,
    layout: layoutReducer,
    auth: authReducer,
})