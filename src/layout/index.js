import React from 'react';
import Navbar from './Navbar';
import './index.css';
function Index(props) {
  return (
    <div>
      <Navbar />
      <div className="main">
          <div className="main-wrap">
              {props.children}
          </div>
      </div>
    </div>
  );
}

export default Index;
