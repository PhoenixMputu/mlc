import React from 'react'
import logo from '../assets/logo.gif'
import '../css/navbar.scss'
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link>
                <img src={logo} alt="MLC" />
            </Link>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor='checkbox'><AiOutlineMenu color='red' size={30}/></label>
                <ul>
                    <li>
                        <Link>Accueil</Link>
                    </li>
                    <li>
                        <Link>Actualités</Link>
                    </li>
                    <li>
                        <Link>Activités</Link>
                    </li>
                    <li>
                        <Link>A propos</Link>
                    </li>
                    <li className='btn btn-primary border'>
                        <Link>Contribution</Link>
                    </li>
                    <li className='btn btn-yellow'>
                        <Link>Nous rejoindre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar