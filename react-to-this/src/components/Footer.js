import React from 'react';

function Footer() {
    return (
        <footer className="fixed-bottom" style={{ height: "8vh", backgroundColor: "#00539C" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <ul className="list-unstyled">
                    <li className="d-inline-block mx-4">
                        <a href="https://www.linkedin.com/in/john-alfaro-a91b76251/" className="rainbow">LinkedIn</a>
                    </li>
                    <li className="d-inline-block mx-4">
                        <a href="https://github.com/jdalfaro4" className="rainbow">GitHub</a>
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