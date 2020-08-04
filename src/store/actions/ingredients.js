import {ADD_INGREDIENT, REMOVE_INGREDIENT} from './actionsTypes';

export const addIngredient = (ingredient, price) => ({
  type: ADD_INGREDIENT,
  ingredient,
  price,
});

export const removeIngredient = (ingredient, price) => ({
  type: REMOVE_INGREDIENT,
  ingredient,
  price,
});
