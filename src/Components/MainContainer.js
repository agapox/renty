import React from 'react';

// Components
import Header from './Header/Header'
import BusinessContainer from './Business/BusinessContainer'

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <BusinessContainer />
    </div>
  );
}

export default MainContainer;
