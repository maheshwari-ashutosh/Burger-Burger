import React from 'react';
import {Ingredient} from './Ingredient';
import './BurgerIngredient.scss';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case Ingredient.BREAD_TOP:
      ingredient = (
        <div className={Ingredient.BREAD_TOP}>
          <div className={Ingredient.SEEDS1}></div>
          <div className={Ingredient.SEEDS2}></div>
        </div>
      );
      break;
    case Ingredient.BREAD_BOTTOM:
      ingredient = <div className={Ingredient.BREAD_BOTTOM}></div>;
      break;
    case Ingredient.LETTUCE:
      ingredient = <div className={Ingredient.LETTUCE}></div>;
      break;
    case Ingredient.TOMATO:
      ingredient = <div className={Ingredient.TOMATO}></div>;
      break;
    case Ingredient.ONION:
      ingredient = <div className={Ingredient.ONION}></div>;
      break;
    case Ingredient.PATTY:
      ingredient = <div className={Ingredient.PATTY}></div>;
      break;
    case Ingredient.CHEESE:
      ingredient = <div className={Ingredient.CHEESE}></div>;
      break;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
