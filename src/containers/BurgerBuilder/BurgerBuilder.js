import React from 'react';
import axios from '../../axios-order';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {Price} from '../../components/Burger/BurgerIngredient/Ingredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControlContext from '../../Context/BuildControlContext';


class BurgerBuilder extends React.Component {
  state = {
    ingredients: {},
    price: 40,
    numberOfIngredients: 0,
    isModalVisible: false,
  };

  addIngredientHandler(ingredient, event) {
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

  confirmOrderHandler() {
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: 'Ashutosh',
        address: {
          street: 'Test Street',
          zip: '123463',
          country: 'India',
        },
        email: 'ashutosh.ismcse@gmail.com  ',
        deliveryMethod: 'fastest',
      }
    }
    axios.post('/orders', data).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControlContext.Provider
          value={{
            ingredients: this.state.ingredients,
            add: this.addIngredientHandler.bind(this),
            remove: this.removeIngredientHandler.bind(this),
          }}
        >
          <BuildControls
            checkout={this.checkoutHandler.bind(this)}
            price={this.state.price}
            isPlaceable={this.state.numberOfIngredients !== 0}
          />
        </BuildControlContext.Provider>
        <Modal
          visible={this.state.isModalVisible}
          dismiss={this.checkoutHandler.bind(this)}
        >
          <OrderSummary
            total={this.state.price}
            ingredients={this.state.ingredients}
            cancel={this.checkoutHandler.bind(this)}
            confirm={this.confirmOrderHandler.bind(this)}
          />
        </Modal>
      </>
    );
  }
}

export default BurgerBuilder;
