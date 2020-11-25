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
  }

  async componentDidMount() {
    try {
      const peopleData = await axios.get(`https://swapi.dev/api/people/?page=${this.state.pageNumber}`)
      peopleData.data.results.map(async characterData => {
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
          count: peopleData.data.count
        })
      })
    }
    catch (err) {
      console.log(err, 'not successful')
    }
  }

  // componentDidUpdate() {
  //   console.log(this.state.pageNumber)
  // }

  handleChange = (e) => {
    const { name } = e.target
    this.setState({
      pageNumber: name
    })

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
