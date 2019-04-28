import React, {Component} from 'react';
import './SearchAndSelect.css';
import Search from '../Search/Search';
import Select from '../Select/Select';

export default class SearchAndSelect extends Component {
  state = {
    query: '',
    filter: '',
    error: null
  }

  updateQuery = query => {
    this.setState({query})
  }

  selectFilter = filter => {
    this.setState({filter})
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {api} = this.props;
    const {query, filter} = this.state;
    this.setState({query: ''})
    try {
      const res = await api.search(query, filter)
      this.props.updateResults(this.state.filter, res.results)
    } catch(err) {
      this.props.setError(err.message)
    }
  }

  render() {
    return (
      <form className='search-form' action='#' onSubmit={(e) => this.handleSubmit(e)}>
        <Search 
          query={this.state.query} 
          updateQuery={this.updateQuery} 
        />
        <Select 
          filter={this.state.filter} 
          selectFilter={this.selectFilter} 
          filterOptions={this.props.filterOptions} 
        />
        <div className='control-form'>
          <button className='button' type='submit'>Search</button>
        </div>
      </form>
    )
  }
}