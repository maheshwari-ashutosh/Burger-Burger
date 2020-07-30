import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../actions/actions';
const initialState = {
  ingredients: {},
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
      };
    default:
      return state;
  }
};

export default reducer;
