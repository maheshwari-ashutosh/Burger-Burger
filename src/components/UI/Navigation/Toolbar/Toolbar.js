import React from 'react';
import './Toolbar.scss';
import Logo from '../../../Logo/Logo';
import Navigation from '../Navigation';
import NavItem from '../NavItem';

const toolbar = (props) => {
  const navList = [
    new NavItem('Burger Builder', '/'),
    new NavItem('Orders', '/orders'),
  ];

  return (
    <header className='Toolbar'>
      <Logo className='Toolbar__logo' />
      <nav className='Toolbar__nav'>
        <Navigation
          navList={navList}
          className='Toolbar__navigation'
          itemClassName='Toolbar__navigation--item'
          flow='row'
        />
        <span onClick={props.click} className="Toolbar__button"></span>
      </nav>
    </header>
  );
};

export default toolbar;
