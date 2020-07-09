import React from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredients from '../../components/Burger/BurgerIngredient/Ingredient';

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
      <div>
        <Burger ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;
