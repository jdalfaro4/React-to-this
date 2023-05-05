import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import Project from './Project';
import '../App.css';

function Navigation() {
    return (
        <div>
            <Header />
            <div className="container-fluid bg-info py-5">
                <div className="row">
                    <section class="welcome" className="col-md-6 offset-md-1">
                        <h2>Welcome!</h2>
                        <p>Welcome to my page!
                        </p>
                    </section>
                </div>
            </div>
            {/* <Project /> */}
            <Footer />
        </div>
    );
}

export default Navigation;