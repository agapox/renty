import React from 'react';
import ApiData from '../../ApiData/ApiData'

// Components
//import MainContainer from './Components/MainContainer/MainContainer'

const Header = () => {
  return (
    <header>
      <div className="container-full">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <img className="logo-image float-left" src="https://renty.cl/static/v3/website/images/logo-renty.png" alt="logo-renty"/>
            </div>
            <div className="profile-container col-6">
              <div className="float-right">
                <span className="profile__user-avatar">
                  <img src={ApiData.user.avatar} alt={ApiData.user.name} />
                </span>
                <span className="profile__user-name">{ApiData.user.name}</span>
                <span className="profile__user-menu"><i className="fas fa-cog"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
