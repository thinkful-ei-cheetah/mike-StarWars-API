import React from 'react';
import './Select.css';

export default function Select(props) {
  const filterOptions = function() {
    return props.filterOptions.map(option => {
      return (
        <label key={option}>
          <input 
            type='radio' 
            name='filter-options' 
            onChange={(e) => handleChange(e.target.value)}
            value={option} 
            checked={props.filter === option}
          />
          {option}
        </label>
      )
    })
  }

  const handleChange = function(value) {
    props.selectFilter(value)
  }

  return (
    <div className='group-form'>
      <label htmlFor='filter-options'>
        Filter By
      </label>
      <fieldset id='filter-options'>
        {filterOptions()}
      </fieldset>
    </div>
  );
};
