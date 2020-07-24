import React from 'react';
import './Order.scss';

const order = (props) => {
  const list = Object.keys(props.ingredients || {}).map(item => {
    return (
      <span key={item} style={{
        display: 'inline-block',
        margin: '.5rem 1rem',
        padding: '1rem',
        backgroundColor: '#eee'
      }}>{item} ({props.ingredients[item]})</span>
    );
  });
  return (
    <li className='OrderItem'>
      <p>Ingredients: {list}</p>
      <p>Price: Rs.{props.price}</p>
    </li>
  );
};

export default order;
