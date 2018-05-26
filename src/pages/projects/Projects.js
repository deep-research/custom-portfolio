import React, { Component } from 'react';
import "./projects.css";
import images from "./images/images.json"

class Projects extends Component {
    imgRow() {
        const galleryCode = [];
        for (var i=0; i<images.length; i+=2) {
            galleryCode.push(
                <div>
                    <img
                        src={images[i].image}
                        key={images[i].id}
                        id={images[i].id}
                        className="gallery-item m-2"
                        name={images[i].name}
                        alt={images[i].name}
                        occupation={images[i].occupation}
                        location={images[i].location}>
                    </img>
                    <img
                        src={images[i+1].image}
                        key={images[i+1].id}
                        id={images[i+1].id}
                        className="gallery-item m-2"
                        name={images[i+1].name}
                        alt={images[i+1].name}
                        occupation={images[i+1].occupation}
                        location={images[i+1].location}>
                    </img>
                </div>
            )            
        }
        return galleryCode
    };

    render() {
        return (
            <div>
                <h2 >My Projects</h2>
                <hr class="mb-4 hr-thick" />
                <div id="img-gallery">
                    {this.imgRow()}
                </div>
            </div>
        );
    }
}

export default Projects;
