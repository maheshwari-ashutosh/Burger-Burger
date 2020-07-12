import React from 'react';
import './Navigation.scss';

const navigation = (props) => {
  const list = props.navList.map((item) => {
    return (
      <li key={item.name} className={`Navigation__item ${props.itemClassName}`}>
        <a href={item.link}>{item.name}</a>
      </li>
    );
  });
  const style = {display: 'flex', flexFlow: props.flow}
  return <ul style={style} className={`Navigation ${props.className}`}>{list}</ul>;
};

export default navigation;
