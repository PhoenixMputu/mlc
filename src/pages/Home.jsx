import React from 'react'
import '../css/home.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import bemba from '../assets/bemba.jpg'
import Card from '../components/Card'
import CardActuality from '../components/CardActuality'

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
      <div className='container'>
        <h2>Nos prochaines activités</h2>
        <div className="flex-row">
          <Card key={1} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
          <Card key={2} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
          <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
        </div>
      </div>
      <div className='container'>
        <h2>Les dernières nouvelles</h2>
        <div className="flex-row">
          <CardActuality key={1} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
          <CardActuality key={2} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
          <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
        </div>
      </div>
    </main>
    </>
  )
}

export default Home