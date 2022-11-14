import React from 'react'
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <header>
            <h1 className='title_name'>Tamim Sarkar</h1>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <a className="cta" href="contact">Contact</a>
            <p className="menu cta">Menu</p>
        </header>
    </div>
  )
}

export default Navbar