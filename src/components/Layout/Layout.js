import React, { useState } from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import Sidebar from '../UI/Sidebar/Sidebar';
function Layout(props) {
  
  const sidebarWidth = '25rem';

  const [style, setStyle] = useState({
    transform: `translate(${sidebarWidth})`,
  });

  const sidebarHandler = () => {
    if(style.transform === `translate(${sidebarWidth})`) {
      setStyle({
        transform: 'none',
      });
    } else {
      setStyle({
        transform: `translate(${sidebarWidth})`,
      });
    }
  };
  
  return (
    <div className='Layout'>
      <Toolbar click={sidebarHandler} />
      <Sidebar dismiss={sidebarHandler} style={style} />
      <main className='Main'>{props.children}</main>
    </div>
  );
};

export default Layout;
