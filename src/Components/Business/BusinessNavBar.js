import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ListModules from './Modules/ListModules'

const BusinessNavBar = () => {
  return (
    <div className="">
      <Link to="/">TUS MODULOS</Link>
      <Link to="/modules">TIENDA</Link>
      <ListModules />
    </div>
  );
}

export default BusinessNavBar;
