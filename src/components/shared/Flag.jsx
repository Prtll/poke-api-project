import React from 'react'
import './styles/flag.css'

const Flag = () => {
  return (
    <header className='flag__header'>
    <div className='flag__header--red'>          
       <img className='flag__img' src="/images/home/pokedex.png" alt="pokedex" />
    </div>
    <div className='flag__header--black'>
      <div className='flag__header--circle-black'>
        <div className='flag__header--circle-gray'></div>
      </div>
    </div>
  
    
     
  </header>
  )
}

export default Flag