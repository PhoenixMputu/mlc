import React from 'react'
import '../css/home.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import bemba from '../assets/bemba.jpg'
import Card from '../components/Card'
import CardActuality from '../components/CardActuality'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div>
            <h1>Bienvenu sur le site officiel du <span>MLC</span></h1>
            <p>Le Mouvement pour le Changement (MLC) est le mouvement qui vous permettra de voir un avenir meilleur. Joignez-vous à nous! Engagez-vous pour un changement positif pour notre pays et pour notre monde</p>
            <Link>En savoir plus</Link>
        </div>
    </section>
    <main>
      <div className="row">
        <img src={bemba} alt="Jean-Pierre Mbemba" />
        <div>
          <h2>Un avenir meilleur pour un Congo meilleur</h2>
          <p>Avec le MLC, votre voix compte ! Réunissons-nous et travaillons ensemble pour bâtir un meilleur futur. Ensemble, nous pouvons être les acteurs du changement et contribuer à construire une société plus juste, plus solidaire et plus durable. Rejoignez le MLC et donnez-lui votre soutien maintenant !</p>
          <Link>En savoir plus</Link>
        </div>
      </div>
      <div className='container'>
        <h2>Nos prochaines activités</h2>
        <div className="flex-row">
          <Card id={1} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
          <Card id={2} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
          <Card id={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
        </div>
      </div>
      <div className='container'>
        <h2>Les dernières nouvelles</h2>
        <div className="flex-row">
          <CardActuality id="Hello" image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
          <CardActuality id="Hello" image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
          <CardActuality id="Hi" image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Home