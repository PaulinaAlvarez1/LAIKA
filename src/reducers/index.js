//@vendors
import {combineReducers} from 'redux';

// @reducers
import paymentReducer from './paymentReducer';

const AppReducer = combineReducers({
  paymentReducer,
});

export default AppReducer;
