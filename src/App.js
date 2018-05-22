import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card"
import {BrowserRouter as Router, Route, Switch, Redirect}
    from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar  />

                    <Switch>
                        <div className="container">
                            <div class="row">
                                <div class="col-md-8 col-sm-7">
                                    <Route exact path="/" render={() => (
                                        <Redirect to="/projects" />)}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/projects" component={Projects}/>
                                    <Route path="/contact" component={Contact}/>
                                </div>
                                <div class="col-md-4 col-sm-5">
                                        <Card />
                                </div>
                            </div>
                        </div>
                    </Switch>
                    
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
