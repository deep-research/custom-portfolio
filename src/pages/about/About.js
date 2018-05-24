import React, { Component } from 'react';
import headshot from "./headshot.jpg";
import "./about.css"

class About extends Component {
    render() {
        return (
            <div>
                <h2 >About Me</h2>
                <hr class="mb-4 hr-thick" />
                <img src={headshot} alt="cat" id="cat" class="img-thumbnail float-left mr-4 mb-4 col-md-6 col-lg-5 col-sm-12 p-2" />
                <blockquote class="blockquote">
                    <p class="mb-0 quote">Victor Fisher: A deep thinker and meticulous worker at the forefront of a true coding revolution!</p>
                </blockquote>
                <p class="about-text">I am a JavaScript full stack web developer who is currently looking for a junior position. I became interested in programming as a way to keep learning new things throughout my career. The logical thinking, problem solving and organizational techniques have all had a positive impact upon my thinking process.</p>
                <p class="about-text">I have experience in JavaScript from Northwestern University's Coding Bootcamp. I have also studied Python 3 and MS SQL Server. In addition to my programming skills, I read religion and music at Lake Forest College. My religious studies also lead me to learning about the subtle art of astrological interpretation! In fact, the complexity of modern astrology is what inspired me to start coding.</p>
                <p class="about-text">It is well known that musicians can make very good programmers. In my case, I feel the attention to detail that I acquired as a musician has allowed me to produce exceedingly high quality code. During orchestra rehearsals, we would tirelessly to perfect every single note. This is a meticulous process can take hours at a time, and it reminds me of the kind of debugging that I do today!</p>
            </div>
        );
    }
}

export default About;
