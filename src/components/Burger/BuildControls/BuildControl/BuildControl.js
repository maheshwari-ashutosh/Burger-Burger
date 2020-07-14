import React from 'react';
import BuildControlContext from '../../../../Context/BuildControlContext';

const buildControl = (props) => {
  return (
    <BuildControlContext.Consumer>
      {(prop) => {
        const disabled = prop.ingredients[props.label] ? false : true;
        return (
          <div className='BuildControl__item'>
            <h2 className='BuildControl__label'>{props.label}</h2>
            <button
              onClick={() => {
                prop.add(props.label);
              }}
              className='btn btn--green BuildControl__button'
            >
              Add
            </button>
            <h2>{prop.ingredients[props.label] || 0}</h2>
            <button
              onClick={() => {
                prop.remove(props.label);
              }}
              className='btn btn--red BuildControl__button'
              disabled={disabled}
            >
              Remove
            </button>
          </div>
        );
      }}
    </BuildControlContext.Consumer>
  );
};

export default buildControl;
