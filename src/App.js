import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.scss';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <BrowserRouter basename='Burger-Burger'>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
