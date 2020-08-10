import React from 'react';
import {connect} from 'react-redux';
import './Toolbar.scss';
import Logo from '../../../Logo/Logo';
import Navigation from '../Navigation';
import NavItem from '../NavItem';
import logout from '../../../../store/actions/logout';
import { Redirect } from 'react-router-dom';

const toolbar = (props) => {
  let auth = new NavItem('Sign In', '/sign-in');
  if(props.idToken) {
    auth = new NavItem('Logout', '/');
  }

  const navList = [
    new NavItem('Burger Builder', '/'),
    props.idToken && new NavItem('Orders', '/orders'),
    auth,
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
          logout={props.onLogout}
        />
        <span onClick={props.click} className='Toolbar__button'></span>
        {props.idToken && <Redirect to='/' />}
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.idToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);
