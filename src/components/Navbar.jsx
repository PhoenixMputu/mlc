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
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/">Actualités</Link> </li>
                <li><Link to="/">Activités</Link></li>
                <li><Link to="/" className='btn-primary'>Contribuer</Link></li>
                <li><Link to="/" className="btn-yellow">Nous rejoindre</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar