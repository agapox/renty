import React, { Component } from 'react';

// Components

class ConfigurationForm extends Component {
  render() {
    return (
      <div className="contract-module">
        <div className="container-full">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h4 className="contract-module__-title">
                  <i className="far fa-calendar"></i>
                  <span>Configuración: Módulo Contratos</span>
                </h4>
                <form className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nombre Empresa</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control input-renty"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Código Impuesto</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control input-renty"/>
                      <small id="emailHelp" className="form-text text-muted">
                        Número identificador de su empresa  conocido como Registro Único Tributario
                      </small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Dirección Fiscal</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control input-renty"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Número Tel.</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control input-renty"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Logo</label>
                    <div className="col-sm-9">
                      <textarea
                        type="text"
                        className="form-control input-renty"
                        placeholder="Arrastre o haga click aquí para subir logo de su empresa 160x50  píxeles"
                        rows="3"/>
                    </div>
                  </div>
                  <button className="btn btn-secondary-renty">Salvar</button>
                  <button className="btn btn-primary-renty">Volver</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfigurationForm