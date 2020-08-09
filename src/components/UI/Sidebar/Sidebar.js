import React from 'react';
import {connect} from 'react-redux';
import Navigation from '../Navigation/Navigation';
import NavItem from '../Navigation/NavItem';
import Backdrop from '../Backdrop/Backdrop';
import logout from '../../../store/actions/logout';

import './Sidebar.scss';
const sidebar = (props) => {
  let auth = new NavItem('Sign In', '/sign-in');
  if(props.idToken) {
    auth = new NavItem('Logout', '/');
  }

  const navList = [
    new NavItem('Burger Builder', '/'),
    new NavItem('Orders', '/orders'),
    auth
  ];
  const backdrop = props.style.transform === 'none' && <Backdrop dismiss={props.dismiss} style={{visibility: 'visible', opacity: '1', 'z-index': '3'}} />

  return (
    <>
      <div className='Sidebar' style={props.style}>
        <Navigation
          dismiss={props.dismiss}
          navList={navList}
          className='Sidebar__navigation'
          itemClassName='Sidebar__navigation--item'
          flow='column'
          logout={props.onLogout}
        />
      </div>
      {backdrop}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
