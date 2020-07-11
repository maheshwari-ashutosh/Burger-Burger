import React from 'react';

const buildControl = (props) => {
  const disabled = props.ingredients[props.label] ? false : true;
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
      <h2>{props.ingredients[props.label] || 0}</h2>
      <button
        onClick={() => {
          props.remove(props.label);
        }}
        className='btn btn--red BuildControl__button'
        disabled = {disabled}
      >
        Remove
      </button>
    </div>
  );
};

export default buildControl;
