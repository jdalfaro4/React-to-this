import React, { useState } from 'react';
import AboutMePic from '../images/About-me-pic.png'
import "../../src/App.css"


function Aboutme() {
    return (
        <div className="container-fluid bg-info" style={{ minHeight: '100vh' }}>
            <div className="row">
                <div className="col-md-10 offset-md-1" style={{ marginTop: '50px', marginLeft: '100px' }}>
                    <h2 class="AboutMeHeader">About Me</h2>
                    <p class="aboutmeparagraph">
                        I'm outgoing, creative, and hardworking! I love the world of coding and can't get enough of learning everyday.
                        I have a beauitful wife who makes my day just by waking up in the morning and I have three crazy kids who are my world.
                        The more I learn, the more I love life, so you'll almost always find me with a book in my hand. I'm a TRUE texan born and raised! 
                        So you'll also find me BBQing every weekend. I welcome any and all criticism and I'm not afraid of any conversation. 
                        My favorite quote is "Take care of yourself as if you were someone you were responsible for" - Dr. Jordan B. Peterson
                    </p>
                    <p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img class="AboutMePic" src={AboutMePic}></img></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;


