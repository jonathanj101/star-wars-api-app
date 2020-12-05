import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import TableData from './components/TableOfData'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Loading from './components/LoadingComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      peopleCount: '',
      pageNumber: '1',
      loading: false,
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRequests = this.handleRequests.bind(this)
    this.searchCharacter = this.searchCharacter.bind(this)
  }
  async componentDidMount() {
    let peopleData = await axios.get(`https://swapi.dev/api/people/`)
    this.handleRequests(peopleData)
  }

  async componentDidUpdate(prevProps, prevState) {
    let pageNumber = this.state.pageNumber
    let textState = this.state.text
    if (this.state.pageNumber !== prevState.pageNumber) {
      let peopleData = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      this.handleRequests(peopleData)
    }
    if (this.state.text !== prevState.text) {
      let peopleData = await axios.get(`https://swapi.dev/api/people/?search=${textState}`)
      this.handleRequests(peopleData)
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      pageNumber: value
    })
  }

  searchCharacter = (text) => {
    this.setState({
      text: text
    })
  }

  handleRequests = async (request) => {
    try {
      const characters = Promise.all(request.data.results.map(async characterData => {
        const characterHomeWorld = await axios.get(characterData.homeworld)
        const characterSpecies = await axios.get(characterData.species)
        let species = !characterSpecies.data.name ? characterData.species = 'Human' : characterData.species = characterSpecies.data.name
        return {
          people: characterData,
          homeWorld: characterHomeWorld.data.name,
          species: species,
        }

      }))
      characters.then(starWarsCharacter => {
        this.setState({
          loading: true,
          people: starWarsCharacter,
          peopleCount: request.data.count
        })
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    const isLoading = this.state.loading
    return (
      <div className="App">
        <Search
          searchCharacter={this.searchCharacter} />
        {!isLoading
          ?
          <Loading />
          :
          <TableData
            peopleData={this.state.people}
            loading={this.state.loading} />
        }
        <Pagination
          pageNumber={this.state.pageNumber}
          count={this.state.peopleCount}
          handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
