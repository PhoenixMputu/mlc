import React from 'react'
import logo from '../assets/logo.gif'
import '../css/footer.scss'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="logo">
            <img src={logo} alt="Logo MLC" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quod facilis architecto laboriosam voluptatum, eaque quos aspernatur, rem animi est tenetur, quo culpa totam voluptates sit incidunt pariatur autem quaerat.</p>
            <div>
                <Link className='btn-primary'>Contribuer</Link>
                <Link className='btn-yellow'>Nous rejoindre</Link>
            </div>
        </div>
        <div className="menu">
            <h3>Menu</h3>
            <ul>
                <li>
                    <Link>Actualité</Link>
                </li>
                <li>
                    <Link>Activités</Link>
                </li>
                <li>
                    <Link>A propos</Link>
                </li>
            </ul>
        </div>
        <div className="contacts">
            <h3>Contacts</h3>
            <ul>
                <li>
                    <Link><AiOutlineMail className='icon' size={26} color="white"/>johndoe@gmail.com</Link>
                </li>
                <li>
                    <Link><BiPhone className='icon' size={26} color="white"/>+243811533644</Link>
                </li>
            </ul>
            <div>
                <a href='www' target='_blank'><CiFacebook size={28} color="white"/></a>
                <a href='www' target='_blank'><TiSocialLinkedinCircular size={30} color="white"/></a>
                <a href='www' target='_blank' className='link'><AiOutlineTwitter size={16} color="white"/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer