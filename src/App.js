import React from 'react';
import Layout from './components/Layout/Layout';
import './App.scss'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Toolbar from './components/UI/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <div> 
      <Layout>
        <Toolbar></Toolbar>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
