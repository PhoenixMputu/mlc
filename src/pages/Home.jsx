import React from 'react'
import '../css/home.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import bemba from '../assets/bemba.jpg'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div>
            <h1>Bienvenu sur le site officiel du <span>MLC</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum accusamus impedit ipsam natus cumque earum sunt quos rerum harum cupiditate sed voluptate nemo tempora, reprehenderit commodi omnis quas amet eligendi?</p>
            <Link>En savoir plus</Link>
        </div>
    </section>
    <main>
      <div className="row">
        <img src={bemba} alt="Jean-Pierre Mbemba" />
        <div>
          <h2>Un avenir meilleur pour un Congo meilleur</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu efficitur odio. Phasellus suscipit feugiat dolor, et iaculis massa lacinia consequat.</p>
          <Link>En savoir plus</Link>
        </div>
      </div>
    </main>
    </>
  )
}

export default Home