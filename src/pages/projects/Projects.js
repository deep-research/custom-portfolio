import React, { Component } from 'react';
import "./projects.css";
import images from "./images/images.json"

class Projects extends Component {
    render() {
        return (
            <div>
                <h2 >My Projects</h2>
                <hr class="mb-4 hr-thick" />
                <div id="img-gallery">
                    {images.map(image => (
                        /* Data is passed to every image with props */
                        <img
                            src={image.image}
                            key={image.id}
                            id={image.id}
                            className="gallery-item"
                            name={image.name}
                            alt={image.name}
                            occupation={image.occupation}
                            location={image.location}>
                        </img>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
