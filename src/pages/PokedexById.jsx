import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Flag from '../components/shared/Flag'
import './styles/pokedexById.css'

const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  console.log(pokemon)

  if (hasError) {
    return <Pokemon404 />
  }

  return (
    <article className='poke__detail'>
      <Flag />
      <section className='poke__detail--stats'>
        <div className='poke__detail--content'>
          <div className={`poke__detail--bg card--poke__header bg-${pokemon?.types[0].type.name}`}>
            <h2 className='poke__detail--name'>{pokemon?.name}</h2>
            <img className='poke__detail--img' src={pokemon?.sprites.other.home.front_default} alt="pokemon" />
          </div>

          <div className='poke__detail--info'>
            <div>
              <h3 className='poke__detail--type'>Type</h3>
              <ul>
                {
                  pokemon?.types.map(type => (
                    <li key={type.slot} className={`poke__type--list background-${type.type.name}`}>{type.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3 className='poke__skills--info'>Skills</h3>
              <ul>
                {
                  pokemon?.abilities.map(ability => (
                    <li className='poke__skills--list' key={ability.url}>{ability.ability.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          </div>
        </section>  
        <section className='poke__conteiner--map'>
        <div className='poke__stats--container'>
            <h3 className='poke__stats--text'>Stats</h3>
            <ul>
              {
                pokemon?.stats.map(stat => (
                  <div key={stat.stat.name}>
                    <div className='poke__stats--content'>
                      <h4 className='poke__stats--name' key={stat.stat.name}>{stat.stat.name}</h4>
                      <h5 className='poke__stats--base'>{stat.base_stat} / 150</h5>
                    </div>
                    <div className='poke__stats--progress'>
                      <div style={{ width: `${stat.base_stat * 100 / 150}%` }} className='poke__stats--porcentage'></div>
                    </div>
                  </div>
                ))
              }
            </ul>
            
          </div>
          <footer className='poke__movement--content'>
            <h3 className='poke__movement--text'>Movements</h3>
            <ul>
              {
                pokemon?.moves.map(move => (
                  <li key={move.move.name} className='poke__movement--list' >{move.move.name}</li>
                ))
              }
            </ul>


          </footer>

        </section>

         

        
      

    </article>
  )
}

export default PokedexById