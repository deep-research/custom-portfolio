import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer mb-4 mt-4">
                <div className="container text-center">
                    <span className="text-muted col-xs-12 text-nowrap">© Copywrite 2017 Victor Fisher</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
