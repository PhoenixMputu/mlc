import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import bemba from '../assets/bemba.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <>
        <Navbar/>
        <section>
            <div>
                <h1>Le plus <span>proche</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum accusamus impedit ipsam</p>
                <Link>Lire plus</Link>
            </div>
        </section>
        <main>
        <div className='container'>
            <h2>Les prochains événements</h2>
            <div className="flex-row">
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
                <Card key={3} image={bemba} title="Lorem Ipsum" place="Kinshasa" date="11/11/2000" hour="11h30"/>
            </div>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default Events