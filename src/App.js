import React, {Component} from 'react';
import './App.css';
import SWapi from './api/SWapi';
import SearchAndSelect from './Components/SearchAndSelect/SearchAndSelect';
import Results from './Components/Result/Result';

class App extends Component {
  state = {
    results: [],
    filterOptions: [],
    filter: '',
    api: new SWapi(),
    searchCount: 0,
    error: null,
  }
  
  async componentDidMount() {
    const {api} = this.state
    try {
      const res = await api.getFilters()
      const filterOptions = Object.keys(res)
      this.setState({filterOptions})
    } catch(err) {
      this.setState({error: err.message})
    }
  }

  updateResults = (filter, results) => {
    const searchCount = this.state.searchCount + 1
    this.setState({filter, results, searchCount})
  }

  setError = msg => {
    this.setState({error: msg})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars</h1>
          </header>
          <main className='main-container'>
            <SearchAndSelect
              filterOptions={this.state.filterOptions}
              api={this.state.api}
              updateResults={this.updateResults}
              setError={this.setError}
            />
            <Results 
              results={this.state.results}
              filter={this.state.filter}
              searchCount={this.state.searchCount}
            />
          </main>
      </div>
    );
  }
}

export default App;
