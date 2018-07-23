import React from 'react'

// Import Components
import Routes from '../../Routes/Routes'
import PurchaseSuccess from '../Notifications/PurchaseSuccess'


const FullContainer = (props) => {
  //console.log(props)
  return (
    <div className="container-full">
      <div className="container-fluid">
        <div className="row">
          <div className="col container-full__last">
            <PurchaseSuccess />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullContainer;
