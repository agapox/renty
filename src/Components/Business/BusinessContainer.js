import React, { Component } from 'react';

// Components
import BusinessNavBar from './BusinessNavBar'

class BusinessContainer extends Component {
  render() {
    return (
      <div className="business-container">
        <div className="container-full">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <BusinessNavBar />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessContainer;
