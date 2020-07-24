import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.scss';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './components/Order/Orders';

function App() {
  return (
    <div>
      <BrowserRouter basename='Burger-Burger'>
        <Layout>
          <Switch>
          <Route path='/orders' exact component={Orders} />
          <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
