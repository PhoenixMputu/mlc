import React from 'react'
import logo from '../assets/logo.gif'
import '../css/navbar.scss'
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <Link to='/' className='brand'><img src={logo} alt="Logo MLC" /></Link>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><AiOutlineMenu size={30} color="white"/></label>
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/admin/dashboard" className={window.location.pathname ==="/admin/dashboard" ? "active" : "hello"}>Dashboard</Link></li>
                <li><Link to="/admin/news" className={window.location.pathname === "/news" ? "active" : "hello"}>Actualité</Link> </li>
                <li><Link to="/admin/event" className={window.location.pathname === "/events" ? "active" : "hello"}>Evénement</Link></li>
                <li onClick={() => console.log("Hello")}><Link className='btn-primary'>Se deconnnceter</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
