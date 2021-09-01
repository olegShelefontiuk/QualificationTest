import React from 'react'



import './styles/App.css'
import logo from './Downloaded Pictures/housecart.png'


export const Navbar =() =>{
    return(
        <nav className="navbar nav navbar-expand-lg navbar-light ">
            <div className="container-fluid logo ">
                <img src={logo} style={{width:"130px", height:"50px"}}
                     className="img-fluid" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}