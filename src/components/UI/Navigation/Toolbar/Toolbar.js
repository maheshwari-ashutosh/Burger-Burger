import React from 'react';
import './Toolbar.scss';
import Logo from '../../../Logo/Logo';
import Navigation from '../Navigation';

class NavItem {
  constructor(name , link) {
    this.name = name;
    this.link = link;
  }
}

const toolbar = (props) => {

  const navList = [
    new NavItem('About' , '#'),
    new NavItem('Burger Builder', '#'),
    new NavItem('Help', '#'),
  ]

  return (
    <header className='Toolbar'>
      <Logo className='Toolbar__logo' />
      <nav className="Toolbar__nav">
        <Navigation navList={navList} className="Toolbar__navigation" itemClassName="Toolbar__navigation--item" flow="row" />
      </nav>
    </header>
  );
};

export default toolbar;
