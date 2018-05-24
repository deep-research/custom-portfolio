import React, { Component } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        const url = window.location.href
        
        if (url.endsWith("about")) {
            var aboutBold = {
                "font-weight": "bold"
            }
        } else if (url.endsWith("projects")) {
            var projectBold = {
                "font-weight": "bold"
            }
        } else if (url.endsWith("contact")) {
            var contactBold = {
                "font-weight": "bold"
            }
        }

        return (
            <nav className="navbar justify-content-around navbar-light bg-light mb-4 border-bottom">
                <Link class="navbar-brand font-weight-bold" to="/projects" title="¡Viva la Revolución!">Victor's Coding Revolution!</Link>
                <form className="form-inline">
                        <Link class="nav-link" to="/about" style={aboutBold}>ABOUT</Link>
                        <Link class="nav-link" to="/projects" style={projectBold}>PROJECTS</Link>
                        <Link class="nav-link" to="/contact" style={contactBold}>CONTACT</Link>
                </form>
            </nav>
        );
    }
}

export default Navbar;
