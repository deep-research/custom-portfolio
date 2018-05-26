import React, { Component } from 'react';
import "./projects.css";
import images from "./images/images.json"

class Projects extends Component {
    imgRow() {
        const galleryCode = [];

        for (var i=0; i<images.length; i+=2) {
            galleryCode.push(
                <div class="row">
                    <div class="gallery-unit col-md-6 col-sm-12">
                        <a href={images[i].link} class="thumbnail">
                            <img class="img-fluid mb-4" src={images[i].image} />
                            <div class="gallery-label text-center">{images[i].name}</div>
                        </a>
                    </div>
                    <div class="gallery-unit col-md-6 col-sm-12">
                        <a href={images[i+1].link} class="thumbnail">
                            <img class="img-fluid mb-4" src={images[i+1].image} />
                            <div class="gallery-label text-center">{images[i+1].name}</div>
                        </a>
                    </div>
                    {/* <img
                        src={images[i].image}
                        key={images[i].id}
                        id={images[i].id}
                        className="gallery-item m-2"
                        name={images[i].name}
                        alt={images[i].name}
                        occupation={images[i].occupation}
                        location={images[i].location}>
                    </img> */}
                    {/* <img
                        src={images[i+1].image}
                        key={images[i+1].id}
                        id={images[i+1].id}
                        className="gallery-item m-2"
                        name={images[i+1].name}
                        alt={images[i+1].name}
                        occupation={images[i+1].occupation}
                        location={images[i+1].location}>
                    </img> */}
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
