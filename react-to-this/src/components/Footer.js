import React from 'react';

function Footer() {
    return (
        <footer className="fixed-bottom" style={{ height: "8vh", backgroundColor: "black" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <ul className="list-unstyled">
                    <li className="d-inline-block mx-4">
                        <a href="https://www.linkedin.com/" className="rainbow">LinkedIn</a>
                    </li>
                    <li className="d-inline-block mx-4">
                        <a href="https://github.com/" className="rainbow">GitHub</a>
                    </li>
                    <li className="d-inline-block mx-4">
                        <a href="https://twitter.com/" className="rainbow">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;