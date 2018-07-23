import React, { Component } from 'react';

// Components
import ModuleContainer from './ModuleContainer'

class ListModules extends Component {
  render() {
    const option1 = {icon: 'fas fa-plus', name: 'Añade un nuevo módulo'}
    //const option2 = {icon: 'fas fa-home', name: 'Modulo Propiedades'}
    return (
      <div className="business-modules container-fluid">
        <div className="row">
          <ModuleContainer moduleInfo={option1} />
        </div>
      </div>
    );
  }
}

export default ListModules;
