import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Beers.css'

const Beers = () => {
  const [beers, setBeers] = useState([])

    useEffect(()=>{
        const getBeers = async () => {
            const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(data)
        }
        getBeers()
    }, [beers])

     const allBeers = beers.map((beer) => {
        return (
            <div className='beers-display'>
                <img src={beer.image_url} alt={beer.name} />
                <div>
                    <p> {beer.name} </p>
                    <p> {beer.tagline} </p>
                    <p> {beer.contributed_by} </p>
                    <Link to={`beers/${beer._id}`}> See Details  </Link>
                </div>

            </div>
        )
    })

  return (
    <div>
        <h1> All the beers </h1>
        {allBeers}

    </div>
  )
}

export default Beers