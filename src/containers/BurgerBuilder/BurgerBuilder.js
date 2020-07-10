import React from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredients from '../../components/Burger/BurgerIngredient/Ingredient';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      [Ingredients.CHEESE]: 1,
      [Ingredients.TOMATO]: 1,
      [Ingredients.ONION]: 1,
      [Ingredients.LETTUCE]: 3,
      [Ingredients.PATTY]: 1,
    },
  };

  render() {
    return (
      <div className="Main">
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBuilder;
