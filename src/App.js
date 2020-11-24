import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import TableData from './components/TableOfData'
import Search from './components/Search'


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    }
  }

  async componentDidMount() {
    try {
      const peopleData = await axios.get('https://swapi.dev/api/people')
      peopleData.data.results.map(async characterData => {
        const characterHomeWorld = await axios.get(characterData.homeworld)
        const characterSpecies = await axios.get(characterData.species)
        let isHuman = !characterSpecies.data.name ? characterData.species = 'Human' : characterData.species = characterSpecies.data.name
        const peopleState = this.state.people
        peopleState.push({
          people: characterData,
          homeworld: characterHomeWorld.data.name,
          species: isHuman
        })
        this.setState({
          people: peopleState
        })
      })
    }

    catch (err) {
      console.log(err, 'not successful')
    }

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Search />
        <TableData passingData={this.state.people} />
      </div>
    );
  }
}

export default App;
