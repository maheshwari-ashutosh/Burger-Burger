import React from 'react';
import logoPath from '../../assets/images/Burger.png';

const logo = (props) => {
   return (
      <div className={props.className}>
        <img src={logoPath} alt="Burger Burger Logo"/>
        <img src={logoPath} alt="Burger Burger Logo"/>
      </div>
   );
}

export default logo;
