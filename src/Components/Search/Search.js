import React from 'react'
import './Search.css';

export default function Search(props) {
  const handleChange = function(value) {
    props.updateQuery(value)
  }

  return (
    <section className='search-bar'>
      <div className='group-form'>
        <label htmlFor='search'>Search</label>
        <input
          className='searchbox'
          type='text'
          name='search'
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </section>
  )
}