import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelecByType from '../components/pokedex/SelecByType'
import Flag from '../components/shared/Flag'
import './styles/pokedex.css'




const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      // si se seleccionó un tipo
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map((e) => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      // si quiero todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  const userName = useSelector(state => state.userName)

  //lógica de paginación

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const inicialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className='pokedex'>
      <header className='pokedex__header'>
        <Flag />
        <p className='pokedex__welcome'>Welcome <span className='pokedex__span'>{userName}</span>, here you can find your favorite pokemon.</p> 
      </header>

      <aside className='pokedex__aside'>
        <div className='pokedex__aside--content'>
        <SelecByType setTypeSelected={setTypeSelected} setPage={setPage} />
        <InputSearch />
        </div>        
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </aside>
      <main className='pokedex__main'>
        <div className='card--container'>
          {
            pokemons?.slice(inicialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}
      />

    </div>
  )
}

export default Pokedex