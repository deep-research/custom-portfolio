import React, { Component } from 'react';
import "./navbar.css"
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar justify-content-around navbar-light bg-light">
                <Link class="navbar-brand font-weight-bold" to="/projects">Victor's Coding Revolution!</Link>
                <form className="form-inline">
                        <Link class="nav-link" to="/about">ABOUT</Link>
                        <Link class="nav-link" to="/projects">PROJECTS</Link>
                        <Link class="nav-link" to="/contact">CONTACT</Link>
                </form>
            </nav>
        );
    }
}

export default Navbar;
