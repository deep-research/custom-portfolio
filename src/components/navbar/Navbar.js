import React, { Component } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        const url = window.location.href
        
        if (url.endsWith("about")) {
            var aboutBold = {
                "fontWeight": "bold"
            }
        } else if (url.endsWith("projects")) {
            var projectBold = {
                "fontWeight": "bold"
            }
        } else if (url.endsWith("contact")) {
            var contactBold = {
                "fontWeight": "bold"
            }
        }

        return (
            <nav className="navbar justify-content-around navbar-light bg-light mb-3 border-bottom">
                <Link className="navbar-brand font-weight-bold" to="/about" title="¡Viva la Revolución!">Victor's Coding Revolution!</Link>
                <form className="form-inline">
                        <Link className="nav-link" to="/about" style={aboutBold}>ABOUT</Link>
                        <Link className="nav-link" to="/projects" style={projectBold}>PROJECTS</Link>
                        <Link className="nav-link" to="/contact" style={contactBold}>CONTACT</Link>
                </form>
            </nav>
        );
    }
}

export default Navbar;
