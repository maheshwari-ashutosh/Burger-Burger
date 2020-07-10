import React from 'react';

const buildControl = (props) => {

  return (
    <div className='BuildControl__item'>
      <h2 className='BuildControl__label'>{props.label}</h2>
      <button className='btn btn--green BuildControl__button'>Add</button>
      <h2>0</h2>
      <button className='btn btn--red BuildControl__button'>Remove</button>
    </div>
  );
};

export default buildControl;
