import React from 'react';
import './OrderSummary.scss';

const orderSummary = (props) => {
  const orderList = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item} className='OrderSummary__list--item'>
        <p>{item}</p>
        <p>{props.ingredients[item]}</p>
      </li>
    );
  });

  return (
    <div className='OrderSummary'>
      <h2 className='OrderSummary__title'>Your Order</h2>
      <ul className='OrderSummary__list'>
        {orderList}
        <li key='total' className='OrderSummary__list--item'>
          <p>Total</p>
          <p>Rs. {props.total}</p>
        </li>
      </ul>
      <p className="OrderSummary__confirmation">Continue to checkout?</p>

      <button
        onClick={props.cancel}
        className='OrderSummary__cancel btn btn--red'
      >
        Cancel
      </button>
      <button onClick={props.confirm} className='OrderSummary__confirm btn btn--green'>Confirm</button>
    </div>
  );
};

export default orderSummary;
