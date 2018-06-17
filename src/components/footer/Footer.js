import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-4 bg-white p-3 border-top">
                <div className="container text-center">
                    <span className="text-muted col-xs-12 text-nowrap" id="copywrite">© Copywrite 2018 Deep Research</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
