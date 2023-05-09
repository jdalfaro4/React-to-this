import React, { useState } from 'react';
import "../../src/App.css"

function Contact() {
    return (
        <div className="container-fluid bg-info" style={{ minHeight: '100vh' }}>
            <div className="row">
                <div className="col-md-6 offset-md-1">
                    <h2 class="ContactMeHeader">Contact Me</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" >Name:</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email address:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" >Message:</label>
                            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required ></textarea>
                        </div>
                        <button onclick="window.location.href='jdalfaro4@gmail.com'" type="submit" className="btn btn-dark text-white" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;