import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import ingredients from './BurgerIngredient/Ingredient';
import './Burger.scss';

const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredients type={ingredients.BREAD_TOP} />
      <BurgerIngredients type={ingredients.CHEESE} />
      <BurgerIngredients type={ingredients.LETTUCE} />
      <BurgerIngredients type={ingredients.TOMATO} />
      <BurgerIngredients type={ingredients.ONION} />
      <BurgerIngredients type={ingredients.PATTY} />
      <BurgerIngredients type={ingredients.BREAD_BOTTOM} />
    </div>
  );
}

export default burger;