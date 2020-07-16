import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import {Ingredient} from './BurgerIngredient/Ingredient';
import './Burger.scss';

const burger = (props) => {

  const addIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredients key={igKey + i} type={igKey}/>
    });
  }).reverse();

  return (
    Object.keys(Ingredient).length !== 0 &&
    <div className="Burger">
      <BurgerIngredients type={Ingredient.BREAD_TOP} />
      {addIngredients}
      <BurgerIngredients type={Ingredient.BREAD_BOTTOM} />
    </div>
  );
}

export default burger;