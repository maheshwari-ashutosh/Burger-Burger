import React from 'react';
import './Backdrop.scss';

const backdrop = (props) => {
   return (
      <div className="Backdrop" style={props.style} onClick={props.dismiss}>
      </div>
   );
}

export default backdrop;
