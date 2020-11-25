import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import TableData from './components/TableOfData'
import Search from './components/Search'
import Pagination from './components/Pagination'


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      peopleCount: '',
      pageNumber: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRequests = this.handleRequests.bind(this)

  }
  async componentDidMount() {
    let wait = await this.handleRequests()
  }

  async componentDidUpdate() {
    let wait = await this.handleRequests()
  }

  handleChange = (e) => {
    const { name } = e.target
    this.setState({
      pageNumber: name
    })
  }

  handleRequests = async () => {
    let pageNumber = this.state.pageNumber
    console.log(pageNumber)

    let request = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
    // let request = await axios.get(`https://swapi.dev/api/people/`)

    console.log(request)
    try {

      if (pageNumber) {
        request.data.results.map(async characterData => {
          console.log(characterData)
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
            people: peopleState,
            count: request.data.count
          })
        })

      } else {
        console.log('nope')
      }
    }
    catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <div className="App">
        <Search />
        <TableData
          passingData={this.state.people} />
        <Pagination
          pageNumber={this.state.pageNumber}
          count={this.state.count}
          handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
