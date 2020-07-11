import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {Price} from '../../components/Burger/BurgerIngredient/Ingredient';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {},
    price: 40
  };

  addIngredientHandler(ingredient, event) {
    console.log(ingredient, event);
    this.setState((state) => {
      const ingredients = {...state.ingredients};
      ingredients[ingredient] = ingredients[ingredient]
        ? ingredients[ingredient] + 1
        : 1;
      const price = state.price + Price[ingredient];
      return {
        ingredients,
        price
      };
    });
  }

  removeIngredientHandler(ingredient, event) {
    console.log(ingredient);
    this.setState((state) => {
      const ingredients = {...state.ingredients};
      let price = state.price;
      if (ingredients[ingredient]) {
        ingredients[ingredient]--;
        price -= Price[ingredient];
        if (!ingredients[ingredient]) {
          delete ingredients[ingredient];
        }
      }
      return {
        ingredients,
        price,
      };
    });
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <h2 className="Price">Price : Rs {this.state.price}</h2>
        <BuildControls
          add={this.addIngredientHandler.bind(this)}
          remove={this.removeIngredientHandler.bind(this)}
          ingredients={this.state.ingredients}
        />
      </>
    );
  }
}

export default BurgerBuilder;
