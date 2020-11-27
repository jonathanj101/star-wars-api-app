import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import TableData from './components/TableOfData'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Loading from './components/LoadingComponent'



class App extends Component {
  constructor() {
    super();
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
    console.log(this.state.loading, prevState.loading)
    if (this.state.pageNumber !== prevState.pageNumber) {
      this.setState({
        people: [],
        loading: false
      })
      let peopleData = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      console.log(peopleData)
      this.handleRequests(peopleData)
    } else if (this.state.text !== prevState.text) {
      this.setState({
        people: [],
        loading: false,
      })
      let peopleData = await axios.get(`https://swapi.dev/api/people/?search=${textState}`)
      console.log(peopleData)
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
    console.log(text)
    this.setState({
      text: text
    })
  }

  handleRequests = async (request) => {
    try {
      request.data.results.map(async characterData => {
        const characterHomeWorld = await axios.get(characterData.homeworld)
        const characterSpecies = await axios.get(characterData.species)
        let isHuman = !characterSpecies.data.name ? characterData.species = 'Human' : characterData.species = characterSpecies.data.name
        const peopleState = this.state.people
        peopleState.push({
          people: characterData,
          homeworld: characterHomeWorld.data.name,
          species: isHuman,
        })
        this.setState({
          loading: true,
          people: peopleState,
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
