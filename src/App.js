import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter as Router, Route, Switch, Redirect}
    from "react-router-dom"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar  />

                    <Switch>
                        <Route exact path="/" render={() => (
                            <Redirect to="/projects" />
                        )}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
