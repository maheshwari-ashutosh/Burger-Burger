import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavItem from '../Navigation/NavItem';
import Backdrop from '../Backdrop/Backdrop';

import './Sidebar.scss';
const sidebar = (props) => {
  const navList = [
    new NavItem('About', '#'),
    new NavItem('Burger Builder', '#'),
    new NavItem('Help', '#'),
  ];
  const backdrop = props.style.transform === 'none' && <Backdrop dismiss={props.dismiss} style={{visibility: 'visible', opacity: '1', 'z-index': '3'}} />

  return (
    <>
      <div className='Sidebar' style={props.style}>
        <Navigation
          navList={navList}
          className='Sidebar__navigation'
          itemClassName='Sidebar__navigation--item'
          flow='column'
        />
      </div>
      {backdrop}
    </>
  );
};

export default sidebar;
