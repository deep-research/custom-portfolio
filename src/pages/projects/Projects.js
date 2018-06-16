import React, { Component } from 'react';
import "./projects.css";
import projects from "./projects.json"

class Projects extends Component {
    imgRow() {
        const galleryCode = [];

        for (var i=0; i<projects.length; i+=2) {
            galleryCode.push(
                <div className="row" key={i}>
                    <div className="gallery-unit col-md-6 col-sm-12">
                        <a href={projects[i].link} className="thumbnail"
                            target="_blank" title={projects[i].created}>
                            <img className="img-fluid mb-4"
                                src={projects[i].image}
                                alt={projects[i].name}
                                key={projects[i].id} />
                            <div className="gallery-label text-center">{projects[i].name}</div>
                        </a>
                    </div>
                    <div className="gallery-unit col-md-6 col-sm-12">
                        <a href={projects[i+1].link} className="thumbnail"
                            target="_blank" title={projects[i+1].created}>
                            <img className="img-fluid mb-4"
                                src={projects[i+1].image}
                                alt={projects[i+1].name}
                                key={projects[i+1].id} />
                            <div className="gallery-label text-center">{projects[i+1].name}</div>
                        </a>
                    </div>
                </div>
            )            
        }
        return galleryCode
    };

    render() {
        return (
            <div>
                <h2 >My Projects</h2>
                <hr className="mb-4 hr-thick" />
                <div id="img-gallery">
                    {this.imgRow()}
                </div>
            </div>
        );
    }
}

export default Projects;
