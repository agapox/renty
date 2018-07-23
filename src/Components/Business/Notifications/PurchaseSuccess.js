import React, { Component } from 'react'

// Import Components
// import Routes from '../../Routes/Routes'


class PurchaseSuccess extends Component {
  render() {
    return (
      <div className="purchase-success">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col"></div>
              <div className="col-md-5">
                <h2 className="text-center">Compra exitosa!</h2>
                <p className="text-center">
                  En hora buena, ya tienes habilitado en tu listado de módulos "Módulos Contratos". Recuerda que deberás configurar tu módulo para uns mejor experiencia de usuario con tus inquilinos.
                </p>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col text-center">
                <button className="btn btn-primary-renty">Configurar</button>
                <button className="btn btn-cancel-renty">Volver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PurchaseSuccess;
