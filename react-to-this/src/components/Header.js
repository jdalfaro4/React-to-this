import React, { useState } from 'react';

const styles = {
    H1: {
        margin: 20,
        color: 'white'
    },
    heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
        color: 'white'
    },
};


function Header() {

    return (
        <div>
            <h1 style={styles.H1}>John Alfaro </h1>
            <heading style={styles.heading}>
                <ul style={styles.content}>
                    <li><a style={styles.content} class="h-section-tabs" href="#about_me">About Me |</a></li>

                    <li><a style={styles.content} class="h-section-tabs" href="#work">Work |</a></li>

                    <li><a style={styles.content} class="h-section-tabs" href="#contact_me">Contact Me |</a></li>
                </ul>
            </heading>
        </div>
    )
}


export default Header;