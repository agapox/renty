import React, { Component } from 'react';

// Components

class ModuleOption extends Component {
  render() {
    const { option } = this.props
    return (
      <div className="business-modules__option text-center">
        <i className={`${option.icon} fa-2x`}></i>
        <p>{option.name}</p>
        <button className="btn btn-primary-renty">Instalado</button>
      </div>
    );
  }
}

export default ModuleOption;
