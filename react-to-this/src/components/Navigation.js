import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';

function Navigation() {


    return (
        <div>
            <h1>This is my Portfolio!</h1>
            <Header onSubmit={Header} />
            <Project />
            <Footer />
        </div>
    );
}

export default Navigation;