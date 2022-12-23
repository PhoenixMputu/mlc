import React from 'react'
import '../css/about.scss'
import Navbar from '../components/Navbar'
import bemba from '../assets/bemba.jpg'

const About = () => {
  return (
    <>
        <Navbar/>
        <div className='section'>
            <aside>
                <h1>C'est quoi <span>MLC</span> ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum accusamus impedit ipsam natus cumque earum sunt quos rerum harum cupiditate sed voluptate nemo tempora, reprehenderit commodi omnis quas amet eligendi?</p>
            </aside>
        </div>
        <main id='main'>
            <section className='flex-row'>
                <img src={bemba} alt="Jean-pierre Mbemba" />
                <div>
                    <h2>Notre vision</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit tenetur natus nesciunt quis eligendi aliquid ea rem veritatis sequi ipsam pariatur provident, obcaecati voluptatum eum repudiandae labore nostrum doloribus dignissimos.</p>
                </div>
            </section>
        </main>
    </>
  )
}

export default About