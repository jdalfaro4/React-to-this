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

function Footer() {


    return (
        <footer>
        <p style={styles.content}>Maximum Effort</p>
    </footer>
    )
}


export default Footer;