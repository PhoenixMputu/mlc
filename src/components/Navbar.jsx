import React from 'react'
import logo from '../assets/logo.gif'
import '../css/navbar.scss'
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <Link to='/' className='brand'><img src={logo} alt="Logo MLC" /></Link>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><AiOutlineMenu size={30} color="white"/></label>
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/" className={window.location.pathname ==="/" ? "active" : "hello"}>Accueil</Link></li>
                <li><Link to="/news" className={window.location.pathname === "/news" ? "active" : "hello"}>Actualités</Link> </li>
                <li><Link to="/events" className={window.location.pathname === "/events" ? "active" : "hello"}>Activités</Link></li>
                <li><Link to="/about" className={window.location.pathname === "/about" ? "active" : "hello"}>A propos</Link></li>
                <li><Link to="/ac" className='btn-primary'>Contribuer</Link></li>
                <li><Link to="/ac" className="btn-yellow">Nous rejoindre</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar