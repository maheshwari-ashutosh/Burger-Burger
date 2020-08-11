import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './components/Layout/Layout';
import './App.scss';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {checkAuthStatus} from './store/actions/signin';
import withAsycnLoading from './hoc/withAsyncLoading/withAsyncLoading';

const orders = withAsycnLoading(() => import('./components/Order/Orders'));
const signin = withAsycnLoading(() => import('./containers/Auth/Signin'));
const signup = withAsycnLoading(() => import('./containers/Auth/Signup'));

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
              <Route path='/orders' exact component={orders} />
              <Route path='/sign-in' component={signin} />
              <Route path='/sign-up' component={signup} />
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
