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

function Portfolio() {

    return (
        <div>
            <ul style={styles.content}>
            <li><a href="https://jdalfaro4.github.io/jda-coding-assasin/"><img class="workimage1" src="./images/w1-Screenshot.png"></img></a></li>

            <li><a href="https://jdalfaro4.github.io/Cutie-Pies/"><img class="workimage2" src="./images/Screenshot 2023-01-31 at 9.54.16 PM.png"></img></a></li>

            <li><a href="https://less-waste-more-taste7.herokuapp.com/"><img class="workimage3" src="./images/Screenshot 2023-03-30 at 9.23.28 PM.png"></img></a></li>
            </ul>
        </div>
    )
}


export default Portfolio;