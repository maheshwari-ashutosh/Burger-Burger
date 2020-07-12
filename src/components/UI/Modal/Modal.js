import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

const modal = (props) => {
   const visibility = props.visible ? 'visible' : 'hidden';
   const opacity = props.visible ? '1' : '0';
   const style = {
      visibility,
      opacity,
   };
  return ( visibility === 'visible' ?
    <div>
      <div className='Modal' style={style}>
         {props.children}
      </div>
      <Backdrop dismiss={props.dismiss} style={style} />
    </div> : null
  );
};

export default modal;
