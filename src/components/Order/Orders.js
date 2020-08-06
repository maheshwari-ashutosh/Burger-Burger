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
      axios.get('/orders.json').then(res => {
        const orders = Object.keys(res.data).map(key => {
          return {
            _id: key,
            ...res.data[key]
          }
        });
        if(!orders) {
          return;
        }
        console.log(orders);
        this.setState({
          orders,
        });
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
