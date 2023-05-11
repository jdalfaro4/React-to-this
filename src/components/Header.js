import React, { useState } from 'react';
import "../App.css"

function Header(props) {
    return (
        <header className="row d-flex align-items-center" style={{ height: "8vh", backgroundColor: "#201E20" }}>
            <div className="col-md-2 mx-5">
                <h2 class= "headername" style={{color: '#DDC3A5'}}>John Alfaro</h2>
            </div>
            <div className="col-md-8 text-center">
                <nav className="w-100">
                    <ul className="d-flex justify-content-between" style={{ margin: "0", padding: "0" }}>
                        <li className="mx-5 d-inline-block colorfade">
                        <button onClick={() => props.handleNavigationClick('Aboutme')} style={{ fontSize: "1.5rem", color: "#DDC3A5", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>About Me</button>
                        </li>
                        <li className="mx-5 d-inline-block colorfade">
                        <button onClick={() => props.handleNavigationClick('Contactme')} style={{ fontSize: "1.5rem", color: "#DDC3A5", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Contact Me</button>
                        </li>
                        <li className="mx-5 d-inline-block colorfade">
                        <button onClick={() => props.handleNavigationClick('Resume')} style={{ fontSize: "1.5rem", color: "#DDC3A5", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Resume</button>
                        </li>
                        <li className="mx-5 d-inline-block colorfade" >
                        <button onClick={() => props.handleNavigationClick('Portfolio')} style={{ fontSize: "1.5rem", color: "#DDC3A5", textDecoration: "none", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>Portfolio</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;