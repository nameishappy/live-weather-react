import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                       
                     
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{"color":"skyblue"}}>TempLive</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Forecast</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Download app</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
