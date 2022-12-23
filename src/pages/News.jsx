import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import bemba from '../assets/bemba.jpg'
import CardActuality from '../components/CardActuality'
import Footer from '../components/Footer'
import '../css/home.scss'

const News = () => {
  return (
    <>
        <Navbar/>
        <section>
            <div>
                <h1>A la <span>une</span></h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum accusamus impedit ipsam natus cumque earum sunt quos rerum harum cupiditate sed voluptate nemo tempora, reprehenderit commodi omnis quas amet eligendi?</p>
                <Link>Lire plus</Link>
            </div>
        </section>
        <main>
        <div className='container'>
            <h2>Les dernières nouvelles</h2>
            <div className="flex-row">
                <CardActuality key={1} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={2} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
                <CardActuality key={3} image={bemba} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat eos voluptatum nihil ipsum quod, velit saepe ducimus atque dolorum voluptatem quia itaque suscipit eum cupiditate minus, corporis delectus a."/>
            </div>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default News