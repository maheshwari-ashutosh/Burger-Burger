import React from 'react';
import ingredients from './Ingredient';
import './BurgerIngredient.scss';

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case ingredients.BURGER_TOP:
      ingredient = (
        <div className={ingredients.BURGER_TOP}>
          <div className={ingredients.SEEDS1}></div>
          <div className={ingredients.SEEDS2}></div>
        </div>
      );
      break;
    case ingredients.BREAD_BOTTOM:
      ingredient = <div className={ingredients.BREAD_BOTTOM}></div>;
      break;
    case ingredients.LETTUCE:
      ingredient = <div className={ingredients.LETTUCE}></div>;
      break;
    case ingredients.TOMATO:
      ingredient = <div className={ingredients.TOMATO}></div>;
      break;
    case ingredients.ONION:
      ingredient = <div className={ingredients.ONION}></div>;
      break;
    case ingredients.PATTY:
      ingredient = <div className={ingredients.PATTY}></div>;
      break;
    case ingredients.CHEESE:
      ingredient = <div className={ingredients.CHEESE}></div>;
      break;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default burgerIngredient;
