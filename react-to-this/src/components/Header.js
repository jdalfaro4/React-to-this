import React from 'react';

function Header() {
    return (
        <header className="row d-flex align-items-center" style={{ height: "10vh", backgroundColor: "#00539C" }}>
            <div className="col-md-2 mx-5">
                <h2 style={{color: 'white'}}>John Alfaro</h2>
            </div>
            <div className="col-md-8 text-center">
                <nav className="w-100">
                    <ul className="d-flex justify-content-between" style={{ margin: "0", padding: "0" }}>
                        <li className="mx-5 d-inline-block rainbow">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "white", textDecoration: "none", border: "none" }}>About Me</a>
                        </li>
                        <li className="mx-5 d-inline-block rainbow">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "white", textDecoration: "none", border: "none" }}>Portfolio</a>
                        </li>
                        <li className="mx-5 d-inline-block rainbow">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "white", textDecoration: "none", border: "none" }}>Contact</a>
                        </li>
                        <li className="mx-5 d-inline-block rainbow" >
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "white", textDecoration: "none", border: "none" }}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;