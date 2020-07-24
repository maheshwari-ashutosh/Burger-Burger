import React, {Component} from 'react';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from './Order';

class Orders extends Component {
  
  state = {
    orders: []
  }

  componentDidMount() {
    if(this.state.orders.length === 0) {
      axios.get('/orders').then(res => {
        const orders = res.data;
        this.setState({
          orders,
        });
        console.log(orders);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  render() {

    const orders = this.state.orders.length > 0 ? this.state.orders.reverse().map(item => {
      return <Order key={item._id} price={item.price} ingredients={item.ingredients} />;
    }) : null;

    return (
    <div className="Orders">
      <ul className="Orders__list">
        {orders}
      </ul>
    </div>);
  }
}

export default withErrorHandler(Orders ,axios);
