import React from 'react'
import FormHome from '../components/home/FormHome'
import Footer from '../components/shared/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <article className='home'>
      <img className='home__img' src="/images/home/pokedex.png" alt="pokedex" />
      <header className='home__header'>
      <h2 className='home__subtitle'>Hi Trainer!</h2>
      <p className='home__text'>Give me your name and discover the Poke World</p>
      </header>      
      <FormHome />
      <Footer />
      
    </article>
  )
}

export default Home