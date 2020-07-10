import React from 'react';
import ingredients from '../BurgerIngredient/Ingredient';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.scss'

const buildControls = props => {
  const options = Object.keys(ingredients).map(item => {
    if(ingredients[item] === ingredients.BREAD_BOTTOM ||
      ingredients[item] === ingredients.BREAD_TOP ||
      ingredients[item] === ingredients.SEEDS1 ||
      ingredients[item] === ingredients.SEEDS2) {
        return null;
      }
    return <BuildControl {...props} key={item} label={ingredients[item]}/>
  });

  return (
    <div className="BuildControl">
      {options}
    </div>
  );
};

export default buildControls;
