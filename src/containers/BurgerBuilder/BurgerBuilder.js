import React from 'react';
import axios from '../../axios-order';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {Price} from '../../components/Burger/BurgerIngredient/Ingredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControlContext from '../../Context/BuildControlContext';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {
  updateIngredient,
  updatePrice,
} from '../../components/Burger/BurgerIngredient/Ingredient';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {},
    price: 40,
    numberOfIngredients: 0,
    isModalVisible: false,
    loading: false,
    isIngredientsLoaded: false,
  };

  fetchIngredients() {
    axios
      .get('/ingredients')
      .then((res) => {
        console.log(res.data);
        updateIngredient(res.data[0].ingredients);
        updatePrice(res.data[0].prices);
        this.setState({
          isIngredientsLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isIngredientsLoaded: true,
        });
      });
  }

  componentDidMount() {
    this.fetchIngredients();
  }

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
    this.setState({
      loading: true,
    });
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
      },
    };
    axios
      .post('/orders', data)
      .then((res) => {
        console.log(res);
        this.setState({
          loading: false,
          isModalVisible: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          isModalVisible: false,
        });
        console.log(error);
      });
  }

  render() {
    const orderSummary = this.state.loading ? (
      <Spinner />
    ) : (
      <OrderSummary
        total={this.state.price}
        ingredients={this.state.ingredients}
        cancel={this.checkoutHandler.bind(this)}
        confirm={this.confirmOrderHandler.bind(this)}
      />
    );

    let burger = this.state.isIngredientsLoaded ? (
      <Burger ingredients={this.state.ingredients} />
    ) : (
      <Spinner />
    );
    let burgerBuilder = this.state.isIngredientsLoaded ? (
      <BuildControls
        checkout={this.checkoutHandler.bind(this)}
        price={this.state.price}
        isOrderPlaceable={this.state.numberOfIngredients !== 0}
      />
    ) : (
      <Spinner />
    );

    return (
      <>
        {burger}
        <BuildControlContext.Provider
          value={{
            ingredients: this.state.ingredients,
            add: this.addIngredientHandler.bind(this),
            remove: this.removeIngredientHandler.bind(this),
          }}
        >
          {burgerBuilder}
        </BuildControlContext.Provider>
        <Modal
          visible={this.state.isModalVisible}
          dismiss={this.checkoutHandler.bind(this)}
        >
          {orderSummary}
        </Modal>
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
