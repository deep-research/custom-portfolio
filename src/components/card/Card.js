import React, { Component } from 'react';
import "./card.css";
import github from "./images/github.png";
import linkedIn from "./images/linkedIn.png";
import stackOverflow from "./images/stackOverflow.png";
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
                    <a href="https://www.linkedin.com/in/victor-fisher-3220a4143/"
                        target="_blank" rel="noopener noreferrer"
                        className="p-2" data-tip="LinkedIn">
                        <img
                            src={linkedIn} alt="LinkedIn"
                            className="img-fluid socialMedia"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/8310067/deep-research"
                        target="_blank" rel="noopener noreferrer"
                        className="p-2" data-tip="Stack Overflow">
                        <img
                            src={stackOverflow} alt="Stack Overflow"
                            className="img-fluid socialMedia"
                        />
                    </a>
                    <ReactTooltip place="top" type="dark" effect="solid"/>
                </div>

                {/* <div className="card-body d-flex flex-row">
                    <a className="p-2" href="https://www.github.com/deep-research" target="_blank"><img src="images/github.png" alt="GitHub" className="img-fluid"></a>
                    <a className="p-2" href="https://www.linkedin.com/in/victor-fisher-3220a4143/" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" className="img-fluid"></a>
                    <a className="p-2" href="https://stackoverflow.com/users/8310067/deep-research" target="_blank"><img src="images/stack-overflow.png" alt="Stack Overflow" className="img-fluid"></a>      
                </div> */}
            </div>
        );
    }
}

export default Card;
