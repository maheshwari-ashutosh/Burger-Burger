import React, {Component} from 'react';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from './Order';
import {connect} from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    isLoading: false,
  };

  componentDidMount() {
    if (this.state.orders.length === 0) {
      this.setState({isLoading: true});
      const queryParams = `auth=${this.props.idToken}&orderBy="userId"&equalTo="${this.props.userId}"`;
      axios
        .get(`/orders.json?${queryParams}`)
        .then((res) => {
          const orders = Object.keys(res.data).map((key) => {
            return {
              _id: key,
              ...res.data[key],
            };
          });
          if (!orders) {
            this.setState({isLoading: false});
            return;
          }
          console.log(orders);
          this.setState({
            orders,
            isLoading: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const orders =
      this.state.orders.length > 0
        ? this.state.orders.reverse().map((item) => {
            return (
              <Order
                key={item._id}
                price={item.price}
                ingredients={item.ingredients}
              />
            );
          })
        : null;

    return (
      <div className='Orders'>
        {this.state.isLoading && <Spinner />}
        {!this.state.isLoading && this.state.orders.length === 0 && (
          <h2 style={{textAlign: 'center'}}>You don't have any orders ... yet!</h2>
        )}
        <ul className='Orders__list'>{orders}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.idToken,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(withErrorHandler(Orders, axios));
