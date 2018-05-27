import React, { Component } from 'react';
import "./projects.css";
import images from "./images.json"

class Projects extends Component {
    imgRow() {
        const galleryCode = [];

        for (var i=0; i<images.length; i+=2) {
            galleryCode.push(
                <div className="row" key={i}>
                    <div className="gallery-unit col-md-6 col-sm-12">
                        <a href={images[i].link} className="thumbnail">
                            <img className="img-fluid mb-4" src={images[i].image} alt={images[i].name} key={images[i].id} />
                            <div className="gallery-label text-center">{images[i].name}</div>
                        </a>
                    </div>
                    <div className="gallery-unit col-md-6 col-sm-12">
                        <a href={images[i+1].link} className="thumbnail">
                            <img className="img-fluid mb-4" src={images[i+1].image} alt={images[i].name} key={images[i].id} />
                            <div className="gallery-label text-center">{images[i+1].name}</div>
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
