import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
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
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from '../../components/Order/ContactDetails/ContactDetails';
import * as actions from '../../store/actions/ingredients';

class BurgerBuilder extends React.Component {
  state = {
    isModalVisible: false,
    loading: false,
    isIngredientsLoaded: false,
  };

  fetchIngredients() {
    axios
      .get('/ingredients.json')
      .then((res) => {
        console.log(res.data);
        updateIngredient(res.data.ingredients);
        updatePrice(res.data.prices);
        this.setState({
          isIngredientsLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isIngredientsLoaded: true,
        });
      });
  }

  componentDidMount() {
    this.fetchIngredients();
  }

  addIngredientHandler(ingredient) {
    this.props.onAddIngredient(ingredient, Price[ingredient]);
  }

  removeIngredientHandler(ingredient) {
    this.props.onRemoveIngredient(ingredient, Price[ingredient]);
  }

  checkoutHandler() {
    this.setState((state) => ({
      isModalVisible: !state.isModalVisible,
    }));
  }

  confirmOrderHandler(name, phone, email, address) {
    this.setState({
      loading: true,
    });
    const data = {
      userId: this.props.userId,
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name,
        phone,
        email,
        address,
        deliveryMethod: 'fastest',
      },
    };
    axios
      .post(`/orders.json?auth=${this.props.idToken}`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          loading: false,
          isModalVisible: false,
        });
        console.log(this.props);
        this.props.onResetIngredient();
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({
          loading: false,
          isModalVisible: false,
        });
        console.log(error);
      });
  }

  cancelCheckoutHandler() {
    this.props.history.goBack();
  }

  render() {
    const orderSummary = this.state.loading ? (
      <Spinner />
    ) : (
      <OrderSummary
        total={this.props.price}
        ingredients={this.props.ingredients}
        cancel={this.checkoutHandler.bind(this)}
        confirm={() => {
          this.props.history.push('/Checkout');
          this.setState({
            loading: false,
            isModalVisible: false,
          });
        }}
      />
    );

    let burger = this.state.isIngredientsLoaded ? (
      <Burger ingredients={this.props.ingredients} />
    ) : (
      <Spinner />
    );
    let burgerBuilder = this.state.isIngredientsLoaded ? (
      <BuildControls
        checkout={this.checkoutHandler.bind(this)}
        price={this.props.price}
        isOrderPlaceable={this.props.numberOfIngredients !== 0}
      />
    ) : (
      <Spinner />
    );

    let checkoutSummary = (
      <div
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#369de2',
          boxShadow: '0 -3px 10px rgba(0,0,0,.3)',
        }}
      >
        <CheckoutSummary
          ingredients={this.props.ingredients}
          total={this.props.price}
          cancel={this.cancelCheckoutHandler.bind(this)}
        />
        <ContactDetails
          confirm={this.confirmOrderHandler.bind(this)}
          cancel={this.cancelCheckoutHandler.bind(this)}
        />
      </div>
    );
    return (
      <>
        {burger}
        <BuildControlContext.Provider
          value={{
            ingredients: this.props.ingredients,
            add: this.addIngredientHandler.bind(this),
            remove: this.removeIngredientHandler.bind(this),
          }}
        >
          <Switch>
            <Route path='/Checkout' exact render={() => checkoutSummary} />
            <Route path='/' exact render={() => burgerBuilder} />
          </Switch>
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

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients.ingredients,
    price: state.ingredients.price,
    numberOfIngredients: state.ingredients.numberOfIngredients,
    idToken: state.auth.idToken,
    userId: state.auth.userId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredient, price) => dispatch(actions.addIngredient(ingredient, price)),
    onRemoveIngredient: (ingredient, price) => dispatch(actions.removeIngredient(ingredient, price)),
    onResetIngredient: () => dispatch(actions.resetIngredient()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(BurgerBuilder, axios)));
