import React from 'react'
import PlanetsList from '../containers/PlanetsList'

const Planets = () => {
  return (
    <>
    <div className="container-fluid d-flex flex-column">
        <h1>
            Welcome to Planets
        </h1>
  
        <PlanetsList />
        </div>
    </>
  )
}

export default Planets