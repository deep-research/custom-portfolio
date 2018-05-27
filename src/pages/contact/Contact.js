import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {
    render() {
        return (
            <div>
                <h2 >Contact Me</h2>
                <hr className="mb-4 hr-thick" />
					<form>
					    <div className="form-group">
					        <label htmlFor="exampleFormControlInput1">Name</label>
					        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
					    </div>
					    <div className="form-group">
					        <label htmlFor="exampleFormControlInput1">Email</label>
					        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
					    </div>
					    <div className="form-group">
					        <label htmlFor="exampleFormControlTextarea1">Message</label>
					        <textarea className="form-control" placeholder="Write something..." id="exampleFormControlTextarea1" rows="6"></textarea>
					    </div>
					    <button id="submit-btn" type="button" className="btn btn-primary pl-4 pr-4 pb-2 pt-2">Submit</button>
					    <br />
					</form>
            </div>
        );
    }
}

export default Contact;
