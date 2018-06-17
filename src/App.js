import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card"
import {BrowserRouter as Router, Route, Switch, Redirect}
    from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./ScrollToTop"

class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Navbar  />

                    <Switch>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-7 bg-light p-4 border" id="content">
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/projects" component={Projects}/>
                                    <Route exact path="/contact" component={Contact}/>
                                    <Route exact path="/" render={() => (
                                        <Redirect to="/about" />) } />
                                </div>
                                <div className="col-md-4 col-sm-5">
                                        <Card />
                                        <br />
                                </div>
                            </div>
                            <br /><br />
                        </div>
                    </Switch>
                    
                    <Footer />
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
