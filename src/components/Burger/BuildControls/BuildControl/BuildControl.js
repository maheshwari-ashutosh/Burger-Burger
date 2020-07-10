import React from 'react';

const buildControl = (props) => {
  return (
    <div className='BuildControl__item'>
      <h2 className='BuildControl__label'>{props.label}</h2>
      <button
        onClick={() => {
          props.add(props.label);
        }}
        className='btn btn--green BuildControl__button'
      >
        Add
      </button>
      <h2>{props.quantity[props.label] || 0}</h2>
      <button
        onClick={() => {
          props.remove(props.label);
        }}
        className='btn btn--red BuildControl__button'
      >
        Remove
      </button>
    </div>
  );
};

export default buildControl;
