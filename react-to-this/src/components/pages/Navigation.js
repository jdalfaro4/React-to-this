import React, { useState } from 'react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
// import Project from './Project';
import '../../App.css';

function Navigation() {
    return (
        <div>
            <Header />
            <div className="container-fluid bg-info py-5">
                <div className="row">
                    <section class="welcome" className="col-md-6 offset-md-1">
                        <h2 style={{color: 'white'}} >Welcome to my page!</h2>
                        
                    </section>
                </div>
            </div>
            {/* <Project /> */}
            <Footer />
        </div>
    );
}



export default Navigation;