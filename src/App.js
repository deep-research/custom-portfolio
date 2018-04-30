import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="jumbotron">Welcome to my website!</h2>
      </div>
    );
  }
}

export default App;
