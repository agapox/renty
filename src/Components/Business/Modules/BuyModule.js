import React, { Component } from 'react';

// Components
//import Header from './Header'

class BuyModule extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, singularName, icon, description, features, price,currencyName, currencySymbol, currencyCode, paymentAccepted } = this.props[1]
    let featuresCont = []
    console.log(this.props[1])
    return (
      <div className="buy-module">
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h4 className="contract-module__-title">
                  <i className={icon}></i>
                  <span className="text-with-icon">Módulo {name}</span>
                </h4>
                <p>
                  <strong>Descripción:</strong> {description}
                </p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col">
                <h5 className="">
                  Características
                </h5>
                <ul>
                  {
                    features.map((feature,index) => {
                      return (
                        <li key={index}>
                          <i className={`fas fa-check`}></i>
                          <span className="text-with-icon">
                            {feature} {singularName.toLowerCase()}
                          </span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col">
                <div className="row align-items-center">
                  <div className="col">
                    <h5>Precio</h5>
                  </div>
                  <div className="col">
                    <h5>Paga con:</h5>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <p>{`${currencySymbol}${price} ${currencyCode} (Mes)`}</p>
                  </div>
                  <div className="col">
                    <img 
                      src="https://renty.cl/static/v3/website/images/logo-webpay-plus-300x88.png"
                      alt="Pagos aceptados" height="88px"/>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row align-items-center">
              <div className="col text-center">
                <button className="btn btn-primary-renty">Comprar</button>
                <button className="btn btn-cancel-renty">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyModule;
