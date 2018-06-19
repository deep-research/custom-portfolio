import React, { Component } from 'react';
import "./card.css";
import github from "./images/github.png";
import linkedIn from "./images/linkedIn.png";
import email from "./images/email.png";
import ReactTooltip from "react-tooltip";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Social Media
                </div>
                <div className="card-body d-flex flex-row justify-content-center">
                    <a href="https://www.github.com/deep-research"
                        target="_blank" rel="noopener noreferrer"
                        className="p-2" data-tip="Github">
                        <img
                            src={github} alt="GitHub"
                            className="img-fluid socialMedia"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/deep-research/"
                        target="_blank" rel="noopener noreferrer"
                        className="p-2" data-tip="LinkedIn">
                        <img
                            src={linkedIn} alt="LinkedIn"
                            className="img-fluid socialMedia"
                        />
                    </a>
                    <a href="mailto:contact@victorscodingrevolution.com"
                        target="_blank" rel="noopener noreferrer"
                        className="p-2" data-tip="Email">
                        <img
                            src={email} alt="Email"
                            className="img-fluid socialMedia"
                        />
                    </a>
                    <ReactTooltip place="top" type="dark" effect="solid"/>
                </div>
            </div>
        );
    }
}

export default Card;
