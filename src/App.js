import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation/Navigation';
import Player from './components/Player/Player';
import './App.css';

class App extends Component{
  render() {
    return (
      <Fragment>
       {/* <Navigation /> */}
       <Player />
      </Fragment>
     );
  }
  
}

export default App;
