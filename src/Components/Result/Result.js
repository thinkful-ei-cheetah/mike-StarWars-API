import React from 'react';
import './Result.css';

export default function Results(props) {
  const peopleResult = result => {
    return (
      <ul>
        <li className='name'>{result.name}</li>
        <li>Gender: {result.gender}</li>
        <li>Birth Year: {result.birth_year}</li>
        <li>Eye Color: {result.eye_color}</li>
        <li>Hair Color: {result.hair_color}</li>
        <li>Skin Color: {result.skin_color}</li>
        <li>Height (cm): {result.height}</li>
        <li>Weight (kg): {result.mass}</li>
      </ul>
    )
  }

  const planetResult = result => {
    return (
      <ul>
        <li className='name'>{result.name}</li>
        <li>Climate: {result.climate}</li>
        <li>Population: {result.population}</li>
        <li>Diameter: {result.diameter}</li>
        <li>Gravity: {result.gravity}</li>
        <li>Terrain: {result.terrain}</li>
      </ul>
    )
  }

  const starshipResult = result => {
    return (
      <ul>
        <li className='name'>{result.name}</li>
        <li>Model: {result.model}</li>
        <li>Manufacturer: {result.manufacturer}</li>
        <li>HyperDrive Rating: {result.hyperdrive_rating}</li>
        <li>Crew Members: {result.crew}</li>
        <li>Passengers: {result.passengers}</li>
        <li>Cargo Capacity: {result.cargo_capacity}</li>
        <li>Length: {result.length}</li>
      </ul>
    )
  }

  const vehicleResult = result => {
    return (
      <ul>
        <li className='name'>{result.name}</li>
        <li>Model: {result.model}</li>
        <li>Manufacturer: {result.manufacturer}</li>
        <li>Crew Members: {result.crew}</li>
        <li>Passengers: {result.passengers}</li>
        <li>Cargo Capacity: {result.cargo_capacity}</li>
        <li>Length: {result.length}</li>
      </ul>
    )
  }

  const filmResult = result => {
    return (
    <ul>
      <li className='name'>{result.title}</li>
      <li>Director: {result.director}</li>
      <li>Producer: {result.producer}</li>
      <li>Release Date: {result.release_date}</li>
    </ul>
    )
  }

  const speciesResult = result => {
    return (
      <ul>
        <li className='name'>{result.name}</li>
        <li>Classification: {result.classification}</li>
        <li>Designation: {result.designation}</li>
        <li>Language: {result.language}</li>
        <li>Eye Color: {result.eye_colors}</li>
        <li>Hair Color: {result.hair_colors}</li>
        <li>Average Height: {result.average_height}</li>
        <li>Average Lifespan: {result.average_lifespan}</li>
      </ul>
    )
  }
  
  const errorResult = () => {
    return <div>Search not found!</div>
  }

  const getResult = (result, option) => {
    switch(option) {
      case 'people': return peopleResult(result)
      case 'planets': return planetResult(result)
      case 'starships': return starshipResult(result)
      case 'vehicles': return vehicleResult(result)
      case 'films': return filmResult(result)
      case 'species': return speciesResult(result)
      default: return errorResult()
    }
  }

  const results = props.results.map((result, index) => {
    return <div key={index}>
      {getResult(result, props.filter)}
    </div>
  })

  if (props.searchCount === 0) {
    return <div className='results'>Search your Star Wars informaion!</div>
  } else if (props.results.length) {
    return (
      <div className='results'>
        <div>
          {results}
        </div>
      </div>
    )
  } else {
    return (
      <div className='results'>No results found</div>
    )
  }
}