import React, { useState } from 'react';
import Resumeimage from '../images/Resume.png'
import "../../src/App.css"


function Resume() {
    return (
        <div className="container-fluid bg-info" style={{ minHeight: '100vh' }}>
            <div className="row">
                    <h2 class="ResumeHeader">Resume</h2>
                    <p>
                        <a>
                            <img class="resumeimage" src={Resumeimage}></img>
                        </a>
                    </p>
                </div>
            </div>
    );
};



export default Resume