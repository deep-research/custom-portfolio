import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Code from './Code';
import Music from './Music';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/code">Coding Page</Link></li>
            <li><Link to="/music">Music Page</Link></li>
          </ul>
          <Route exact path="/" render={() => (
            <Redirect to="/code" />
          )}/>
          <Route path="/code" component={Code}/>
          <Route path="/music" component={Music}/>
        </div>
      </Router>
    );
  }
}

export default App;
