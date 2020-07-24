import React from 'react';
import './Input.scss';

const input = (props) => {
  let input = null;
  switch (props.type) {
    case 'textarea':
      input = (
        <>
          <textarea onChange={(event) => props.changed(event, props.id)} className="Input" {...props.config} />
          <label htmlFor={props.config.id} className='Input__label'>
            {props.config.placeholder}
          </label>
        </>
      );
      break;
    case 'select':
      input = (
        <select onChange={(event) => props.changed(event, props.id)} {...props.config} value={props.value}>
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      input = (
        <>
          <input onChange={(event) => props.changed(event, props.id)} className="Input" {...props.config} />
          <label htmlFor={props.config.id} className='Input__label'>
            {props.config.placeholder}
          </label>
        </>
      );
  }
  return <div className='Input__container'>{input}</div>;
};

export default input;
