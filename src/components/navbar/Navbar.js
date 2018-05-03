import React, { Component } from 'react';
import "./navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar justify-content-around navbar-light bg-light">
                    <a className="navbar-brand text-danger font-weight-bold">Victor's Coding Revolution!</a>
                    <form className="form-inline">
                            <a class="nav-link" href="#">ABOUT</a>
                            <a class="nav-link" href="#">PROJECTS</a>
                            <a class="nav-link" href="#">CONTACT</a>
                    </form>
                </nav>
            </div>
        );
    }
}

export default Navbar;
