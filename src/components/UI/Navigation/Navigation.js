import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.scss';

const navigation = (props) => {
  const onClick = (name) => {
    if(name === 'Logout') {
      return () => {
        props.logout();
        if(props.dismiss) {
          props.dismiss();
        }
      }
    } else {
      return () => {
        if(props.dismiss) {
          props.dismiss();
        }
      }
    }
  }
  const list = props.navList.map((item) => {
    if(item === null) {
      return null;
    }
    return (
      <li key={item.name} className={`Navigation__item ${props.itemClassName}`} onClick={onClick(item.name)}>
        <NavLink to={item.link} exact>{item.name}</NavLink>
      </li>
    );
  });
  const style = {display: 'flex', flexFlow: props.flow}
  return <ul style={style} className={`Navigation ${props.className}`}>{list}</ul>;
};

export default navigation;
