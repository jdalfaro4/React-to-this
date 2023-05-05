import React, { useState } from 'react';

function Aboutme() {
    return (
        <div className="container-fluid bg-info" style={{ minHeight: '100vh' }}>
            <div className="row">
                <div className="col-md-10 offset-md-1" style={{ marginTop: '50px', marginLeft: '100px' }}>
                    <h2>About Me</h2>
                    <p class="aboutmeparagraph">I'm outgoing, creative, and hardworking! I love the world of coding and can't get enough of learning everyday.
                        I have a beauitful wife who makes my day just by waking up in the morning and I have three crazy kids who are my world.
                        The more I learn, the more I love life, so you'll almost always find me with a book in my hand. "Take care of yourself as if you
                        were someone you were responsible for"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;


