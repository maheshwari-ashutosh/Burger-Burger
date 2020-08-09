import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.scss';

const navigation = (props) => {
  const list = props.navList.map((item) => {
    return (
      <li key={item.name} className={`Navigation__item ${props.itemClassName}`} onClick={props.dismiss}>
        <NavLink to={item.link} exact>{item.name}</NavLink>
      </li>
    );
  });
  const style = {display: 'flex', flexFlow: props.flow}
  return <ul style={style} className={`Navigation ${props.className}`}>{list}</ul>;
};

export default navigation;
