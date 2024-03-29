import React from 'react'
import '../css/about.scss'
import Navbar from '../components/Navbar'
import bemba from '../assets/bemba.jpg'
import objectif from '../assets/objectif.jpg'
import Footer from '../components/Footer'

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
        <main className='main'>
            <section className='flex-row'>
                <img src={bemba} alt="Jean-pierre Mbemba" />
                <div>
                    <h2>Notre vision</h2>
                    <p>La vision du MLC (Mouvement de Libération des Citoyens) est de promouvoir la liberté, la démocratie et la justice pour tous les citoyens. Il s'efforce également de promouvoir une société qui respecte les droits de l'homme et où tous les citoyens peuvent exercer leurs droits sans discrimination. Le MLC cherche à encourager les citoyens à participer à la vie politique et à s'impliquer dans la prise de décision.</p>
                </div>
            </section>
            <section className='container__section'>
                <h2>Nos valeurs</h2>
                <div className="container__card">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMZyoSplr0u8iz9Za0KeILNL2jaz1e_hzXw&usqp=CAU" alt="Indépendance" className="card-image" />
                        <h3>La démocratie</h3>
                    </div>
                    <div className="card">
                        <img src="https://thumbs.dreamstime.com/z/%C3%A9chelles-avec-l-illustration-de-signe-d-%C3%A9galit%C3%A9-112759508.jpg" alt="" className="card-image" />
                        <h3>Justice</h3>
                    </div>
                    <div className="card">
                        <img src="https://previews.123rf.com/images/tashalex/tashalex1508/tashalex150800150/44104439-independence-concept-de-carte-de-jour-avec-la-libert%C3%A9-statue-vector-illustration.jpg" alt="Indépendance" className="card-image" />
                        <h3>Indépendance</h3>
                    </div>
                    <div className="card">
                        <img src="https://thumbs.dreamstime.com/z/%C3%A9chelles-avec-l-illustration-de-signe-d-%C3%A9galit%C3%A9-112759508.jpg" alt="" className="card-image" />
                        <h3>Sécurité et paix</h3>
                    </div>
                </div>
            </section>
            <section className='flex-row reverse'>
                <div>
                    <h2>Notre mission</h2>
                    <p>Le Mouvement pour le Leadership Changé (MLC) a pour objectif de redonner du pouvoir aux citoyens et de permettre à chacun de devenir un leader positif et responsable. Le MLC promeut une forme de leadership basée sur l'écoute des autres, le travail collaboratif et le respect des autres. Il cherche à encourager des comportements proactifs et responsables qui sont à l'origine de véritables changements sociaux et économiques. Cette vision s'appuie également sur la collaboration et le partage des ressources entre les divers groupes et organisations.</p>
                </div>
                <img src={objectif} alt="Jean-pierre Mbemba" />
            </section>
            <section className='container__section'>
                <h2>Notre équipe</h2>
                <div className="container__card__team">
                    <div className="card">
                        <img src="https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/bemba.jpg?itok=7djby2Uj" alt="Indépendance" className="card-image" />
                        <h3>Jean-Pierre Mbemba</h3>
                        <h4>Fondateur</h4>
                    </div>
                    <div className="card">
                        <img src="https://republique.cd/app/uploads/2021/11/Eve-Bazaiba-2-1024x683.jpg" alt="Indépendance" className="card-image" />
                        <h3>Ève Bazaiba</h3>
                        <h4>Sécretaire Générale</h4>
                    </div>
                    <div className="card">
                        <img src="https://pbs.twimg.com/media/EXTMr-_X0AEQicC.jpg" alt="Indépendance" className="card-image" />
                        <h3>Aldarich Luboyo</h3>
                        <h4>Président League de Jeunes</h4>
                    </div>
                    <div className="card">
                        <img src="https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/bemba.jpg?itok=7djby2Uj" alt="Indépendance" className="card-image" />
                        <h3>Jean-Pierre Mbemba</h3>
                        <h4>Fondateur</h4>
                    </div>
                </div>
            </section>
        </main>
        <section className="container__contact">
            <div>
                <h2>Contactez-nous</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet illo optio culpa perspiciatis debitis, nemo vero architecto ipsam nisi similique facilis, distinctio voluptas. Assumenda harum ad quam facere tempore.</p>
                <div className="icon">
                    <a href="hello" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="hello" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="hello" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
            <form>
                <div className="group-input">
                    <label htmlFor='name'>Nom</label>
                    <input type="text" name='name'/>
                </div>
                <div className="group-input">
                    <label htmlFor='firstname'>Prénom</label>
                    <input type="text" name='firstname'/>
                </div>
                <div className="group-input">
                <label htmlFor='email'>Email</label>
                    <input type="email" name='email'/>
                </div>
                <div className="group-input">
                    <label htmlFor='subjet'>Sujet</label>
                    <input type="text" name='subjet'/>
                </div>
                <div className="message">
                    <label htmlFor='message'>Message</label>
                    <textarea cols="30" rows="10" name='message'></textarea>
                </div>
                <button type="submit" className="w-100">Envoyer</button>
            </form>
        </section>
        <Footer/>
    </>
  )
}

export default About