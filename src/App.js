import React, { Component } from 'react';
import ApplicationLevelStateDemo from './containers/ApplicationLevelStateDemo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicationLevelStateDemo />
      </div>
    );
  }
}

export default App;
