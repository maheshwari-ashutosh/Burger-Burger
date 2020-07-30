import {UPDATE_PRICE} from '../actions/actions';
const initialState = {
  price: 40,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRICE:
      return {
        price: state.price + action.price,
      };
    default:
      return state;
  }
};

export default reducer;
