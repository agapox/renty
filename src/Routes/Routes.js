import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Import Components
import MainContainer from '../Components/MainContainer';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={MainContainer}/>
      </BrowserRouter>
      
    );
  }
}

export default Routes;
// <h5>
//   <span>
//     Tus Modulos
//   </span>
//   <span>
//     Tienda
//   </span>
// </h5>