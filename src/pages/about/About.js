import React, { Component } from 'react';
import headshot from "./headshot.jpg";
import "./about.css";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                <h2 >About Me</h2>
                <hr className="mb-4 hr-thick" />
                <img src={headshot} alt="headshot" id="headshot" className="img-thumbnail float-left mr-4 mb-4 col-md-6 col-lg-5 col-sm-12 p-2" />
                <blockquote className="blockquote">
                    <p className="mb-0 quote">Victor Fisher: A deep thinker and meticulous worker at the forefront of a true coding revolution!</p>
                </blockquote>
                <p className="about-text">I am a JavaScript full stack web developer who
                    is currently looking for a junior position. I became interested in
                    programming as a way to keep learning new things throughout my career.
                    The logical thinking, problem solving and organizational techniques
                    have all had a positive impact upon my thinking process.</p>
                <p className="about-text">I have experience in JavaScript from Northwestern
                    University's Coding Bootcamp. I have also studied Python and Linux at
                    Harper College. In addition to my programming skills, I read religion
                    and music at Lake Forest College. My religious studies even lead me to
                    learning about the history of astrology! In fact, the complexity of
                    modern astrology is what inspired me to start coding.</p>
                <p className="about-text">It is well known that musicians can make very good
                    programmers. In my case, I feel the attention to detail that I acquired
                    as a musician has allowed me to produce exceedingly high quality code.
                    During orchestra rehearsals, we would tirelessly to perfect every single
                    note. This is a meticulous process can take hours at a time, and it
                    reminds me of the kind of debugging that I do today!</p>
                <br />
                <h4>Technical Skills:</h4>
                <ul>
                    <li>HTML5 and Bootstrap 4</li>
                    <li>CSS 3 and Media Queries</li>
                    <li>jQuery and AJAX</li>
                    <li>Node.js, ES6, MVC, OOP</li>
                    <li>React and Handlebars</li>
                    <li>APIs and JSON</li>
                    <li>Testing and Debugging</li>
                    <li>GIT, Github and Heroku</li>
                    <li>MySQL, MongoDB, SQL Server and Firebase</li>
                    <li>Python 3 and Raspberry Pi</li>
                    <li>Windows 10 and Linux</li>
                </ul>
                <br />
                <Link className="d-flex justify-content-center" to="/projects"  style={{"textDecoration": "none"}}>
                    <button type="button" className="btn btn-primary">
                        My Projects
                    </button>
                </Link>
                <br />
            </div>
        );
    }
}

export default About;
