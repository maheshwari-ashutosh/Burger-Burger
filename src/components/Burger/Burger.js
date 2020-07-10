import React from 'react';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';
import ingredients from './BurgerIngredient/Ingredient';
import './Burger.scss';

const burger = (props) => {

  const addIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredients key={igKey + i} type={igKey}/>
    });
  }).reverse();

  return (
    <div className="Burger">
      <BurgerIngredients type={ingredients.BREAD_TOP} />
      {addIngredients}
      <BurgerIngredients type={ingredients.BREAD_BOTTOM} />
    </div>
  );
}

export default burger;