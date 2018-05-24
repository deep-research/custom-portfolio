import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {
    render() {
        return (
            <div>
                <h2 >Contact Me</h2>
                <hr class="mb-4 hr-thick" />
					<form>
					    <div class="form-group">
					        <label for="exampleFormControlInput1">Name</label>
					        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
					    </div>
					    <div class="form-group">
					        <label for="exampleFormControlInput1">Email</label>
					        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
					    </div>
					    <div class="form-group">
					        <label for="exampleFormControlTextarea1">Message</label>
					        <textarea class="form-control" placeholder="Write something..." id="exampleFormControlTextarea1" rows="6"></textarea>
					    </div>
					    <button id="submit-btn" type="button" class="btn btn-primary pl-4 pr-4 pb-2 pt-2">Submit</button>
					    <br />
					</form>
            </div>
        );
    }
}

export default Contact;
