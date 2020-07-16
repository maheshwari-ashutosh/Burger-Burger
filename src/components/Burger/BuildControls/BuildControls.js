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
    return <BuildControl key={item} label={Ingredient[item]} />;
  });

  return (
    options.length > 0 &&
    <div className='BuildControl'>
      <h2 className='Price'>Total: Rs. {props.price}</h2>
      {options}
      <button onClick={props.checkout} className="btn btn--blue BuildControl__button--order" disabled={!props.isOrderPlaceable}>Order Now</button>
    </div>
  );
};

export default buildControls;
