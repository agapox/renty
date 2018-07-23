import React from 'react';

// Components
import ModuleOption from './ModuleOption'

const ModuleContainer = (props) => {
  
  return (
    <div className="module-container">
      <div className="col-sm">
        <div className="business-modules__item">
          <div className="row align-items-center">
            <div className="col">
              <ModuleOption option={props.moduleInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleContainer;