import React from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <div className="Layout">
    <Toolbar />
    <main className="Main">{props.children}</main>
  </div>
);

export default layout;
