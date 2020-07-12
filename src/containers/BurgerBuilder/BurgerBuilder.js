import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {Price} from '../../components/Burger/BurgerIngredient/Ingredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {},
    price: 40,
    numberOfIngredients: 0,
    isModalVisible: false,
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
        price,
        numberOfIngredients: state.numberOfIngredients + 1,
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
        numberOfIngredients: state.numberOfIngredients - 1,
      };
    });
  }

  checkoutHandler() {
    this.setState((state) => ({
      isModalVisible: !state.isModalVisible,
    }));
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler.bind(this)}
          remove={this.removeIngredientHandler.bind(this)}
          checkout={this.checkoutHandler.bind(this)}
          ingredients={this.state.ingredients}
          price={this.state.price}
          isPlacebale={this.state.numberOfIngredients !== 0}
        />
        <Modal
          visible={this.state.isModalVisible}
          dismiss={this.checkoutHandler.bind(this)}
        >
          <OrderSummary total={this.state.price} ingredients={this.state.ingredients} cancel={this.checkoutHandler.bind(this)}/>
        </Modal>
      </>
    );
  }
}

export default BurgerBuilder;
