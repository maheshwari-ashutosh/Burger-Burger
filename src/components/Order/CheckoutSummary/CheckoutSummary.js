import React from 'react';
import './CheckoutSummary.scss';

const checkoutSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item} className='CheckoutSummary__list--item'>
        <p>{item}</p>
        <p>{props.ingredients[item]}</p>
      </li>
    );
  });

  return (
    <div className='CheckoutSummary'>
      <h2 className='CheckoutSummary__title'>
        Great choice! Its looks delicious!!!
      </h2>
      <ul className='CheckoutSummary__list'>
        {ingredients}
        <li className='CheckoutSummary__list--item'>
          <p>Total</p>
          <p>{props.total}</p>
        </li>
      </ul>
      <button
        onClick={props.cancel}
        className='btn btn--red CheckoutSummary__cancel'
      >
        Cancel
      </button>
      <button className='btn btn--green CheckoutSummary__confirm'>
        Continue
      </button>
    </div>
  );
};

export default checkoutSummary;
