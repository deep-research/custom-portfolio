import React, { Component } from 'react';
import headshot from "./headshot.jpg";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                <h2 >404 Error</h2>
                <hr className="mb-4 hr-thick" />
                <p className="about-text">The page could not be found.</p>
                <br />
            </div>
        );
    }
}

export default About;
