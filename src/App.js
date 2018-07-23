import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store/*, { history }*/ from './store/store'
import Routes from './Routes/Routes'

// Components
import MainContainer from './Components/MainContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes children={MainContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
