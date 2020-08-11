import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './components/Layout/Layout';
import './App.scss';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './components/Order/Orders';
import Signin from './containers/Auth/Signin';
import Signup from './containers/Auth/Signup';
import {checkAuthStatus} from './store/actions/signin';

class App extends React.Component {

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter basename='Burger-Burger'>
          <Layout>
            <Switch>
              <Route path='/orders' exact component={Orders} />
              <Route path='/sign-in' component={Signin} />
              <Route path='/sign-up' component={Signup} />
              <Route path='/' component={BurgerBuilder} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuthStatus()),
  };
};

export default connect(null, mapDispatchToProps)(App);
