import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import Project from './Project';

function Navigation() {
    return (
        <div>
            <Header />
            <div className="container-fluid bg-info py-5">
                <div className="row">
                    <div className="col-md-6 offset-md-1">
                        <h2>About Me</h2>
                        <p class="aboutmeparagraph">I'm energetic, outgoing, creative, and hardworking! I love the world of coding and can't get enough of learning everyday.
                            I have a beauitful wife who makes my day just by waking up in the morning and I have three crazy kids who are my world. 
                            The more I learn, the more I love life, so you'll almost always find me with a book in my hand. "Take care of yourself as if you
                            were someone you were responsible for"
                        </p>
                    </div>
                </div>
            </div>
            {/* <Project /> */}
            <Footer />
        </div>
    );
}

export default Navigation;