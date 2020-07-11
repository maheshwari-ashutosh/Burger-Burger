import React from 'react';
import {Ingredient} from '../BurgerIngredient/Ingredient';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.scss';

const buildControls = (props) => {
  const options = Object.keys(Ingredient).map((item) => {
    if (
      Ingredient[item] === Ingredient.BREAD_BOTTOM ||
      Ingredient[item] === Ingredient.BREAD_TOP ||
      Ingredient[item] === Ingredient.SEEDS1 ||
      Ingredient[item] === Ingredient.SEEDS2
    ) {
      return null;
    }
    return <BuildControl {...props} key={item} label={Ingredient[item]} />;
  });

  return (
    <div className='BuildControl'>
      <h2 className='Price'>Price : Rs {props.price}</h2>
      {options}
      <button className="btn btn--blue BuildControl__button" disabled={!props.isPlacebale}>Checkout</button>
    </div>
  );
};

export default buildControls;