import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      
    },
  };

  addIngredientHandler(ingredient, event) {
    console.log(ingredient, event);
    this.setState((state) => {
      const ingredients = {...state.ingredients};
      ingredients[ingredient] = ingredients[ingredient] ? ingredients[ingredient]+1 : 1;
      return {
        ingredients,
      }
    });
  }

  removeIngredientHandler(ingredient, event) {
    console.log(ingredient);
    this.setState((state) => {
      const ingredients = {...state.ingredients};
      if(ingredients[ingredient]) {
        ingredients[ingredient]--;
        if(!ingredients[ingredient]) {
          delete ingredients[ingredient];
        }
      }
      return {
        ingredients,
      }
    });
  }

  render() {
    return (
      <div className='Main'>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler.bind(this)}
          remove={this.removeIngredientHandler.bind(this)}
          quantity={this.state.ingredients}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
