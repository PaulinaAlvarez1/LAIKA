// @action types
import {ON_CHANGE_EXPENSES, ON_SET_PRICE} from '../constants/actionTypes';

const initialState = {
  petExpenses: '',
  price: 0,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_EXPENSES: {
      return {
        ...state,
        petExpenses: action.payload,
      };
    }
    case ON_SET_PRICE: {
      return {
        ...state,
        price: Number(state.petExpenses) * 0.15 * 12,
      };
    }
    default:
      return state;
  }
};

export default paymentReducer;
