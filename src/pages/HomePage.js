import React from 'react'
import {Link} from 'react-router-dom'
import beersImage from '../assets/beers.png'
import randomBeersImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'

const HomePage = () => {
return (
    <div>
        <div>
            <img src={beersImage} alt='beers' />
            <h2> <Link to='/beers'> Beers </Link> </h2>
            <p> Check out all of the different types of beers available </p>
        </div>        
            
        <div>
            <img src={randomBeersImage} alt='random beer' />
            <h2> <Link to='/random-beer'> Random Beer </Link> </h2>
            <p> Discover a new beer </p>
        </div>

        <div>
            <img src={newBeerImage} alt='new beer' />
            <h2> <Link to='/new-beer'> New Beer </Link> </h2>
            <p> Add a new beer </p>            
        </div>
    </div>
  )
}

export default HomePage