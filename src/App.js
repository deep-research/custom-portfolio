import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect}
    from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
            
            // <Router>
            //     <div>
            //         <ul>
            //             <li><Link to="/code">Coding Page</Link></li>
            //             <li><Link to="/music">Music Page</Link></li>
            //         </ul>
                    
            //         <Switch>
            //             <Route exact path="/" render={() => (
            //                 <Redirect to="/code" />
            //             )}/>
            //             <Route path="/code" component={Code}/>
            //             <Route path="/music" component={Music}/>
            //         </Switch>
            //     </div>
            // </Router>
        );
    }
}

export default App;
