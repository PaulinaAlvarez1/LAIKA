// @action types
import {ON_CHANGE_EXPENSES, ON_SET_PRICE} from '../constants/actionTypes';

export const onChangeExpenses = expenses => dispatch =>
  dispatch({
    type: ON_CHANGE_EXPENSES,
    payload: expenses,
  });

export const onSetPrice = () => dispatch =>
  dispatch({
    type: ON_SET_PRICE,
  });
