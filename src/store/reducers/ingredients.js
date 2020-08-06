import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENT,
} from '../actions/actionsTypes';
const initialState = {
  ingredients: {},
  price: 40,
  numberOfIngredients: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient]
            ? +state.ingredients[action.ingredient] + 1
            : 1,
        },
        price: state.price + action.price,
        numberOfIngredients: state.numberOfIngredients + 1,
      };
    case REMOVE_INGREDIENT:
      const ingredients = {
        ...state.ingredients,
      };
      ingredients[action.ingredient]--;
      if (ingredients[action.ingredient] === 0) {
        delete ingredients[action.ingredient];
      }
      return {
        ingredients,
        price: state.price - action.price,
        numberOfIngredients: state.numberOfIngredients - 1,
      };
    case RESET_INGREDIENT:
      return {
        ingredients: {},
        price: 40,
        numberOfIngredients: 0,
      };
    default:
      return state;
  }
};

export default reducer;
