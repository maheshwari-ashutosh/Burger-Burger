import React from 'react';
const layout = (props) => (
  <div className="Layout">
    <div className="Toolbar">Toolbar, Sidebar, Backdrop</div>
    <main className="Main">{props.children}</main>
  </div>
);

export default layout;
