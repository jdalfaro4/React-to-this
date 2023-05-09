import React, { useState } from 'react';
import piggypies from '../images/Piggy-pies.png'
import LWMT from '../images/LWMT.png'
import "../../src/App.css"

function Portfolio() {
    return (
        <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#E0A96D' }}>
            <h1 class= "PortfolioHeader">Portfolio</h1>
            <div className="row" style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                <div className="col-md-4 mb-5">
                    <div className="card custom-card">
                        <div className="card-body">
                            <h5 className="card-title">Box 1</h5>
                            <p className="card-text">Description of box 1.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card custom-card">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p>
                            <a href="https://jdalfaro4.github.io/Cutie-Pies/"><img class="piggies-pies" src={piggypies}></img></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card custom-card">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p>
                            <a href="https://less-waste-more-taste7.herokuapp.com/"><img class="LWMT" src={LWMT}></img></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;