import React, { Component } from 'react';
import ApiData from '../../../ApiData/ApiData'

// Components
import BuyModule from '../../Business/Modules/BuyModule'

class Modal extends Component {
  render() {
    return (
      <div className="modal-item">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Instalar
        </button>
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <BuyModule {...ApiData.modules}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal