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
      // planet: [],
      // species: []
    }
  }

  async componentDidMount() {
    // const peopleData = await axios.get('https://swapi.dev/api/people')
    // console.log(peopleData.data.results)
    // peopleData.data.results.map(characterData => {
    //   // const homeWorld = await axios.get('https://swapi.dev/api/planets/')
    //   const peopleState = this.state.people
    //   peopleState.push(characterData)
    //   // console.log(homeWorld)
    //   this.setState({
    //     people: peopleState
    //   })
    // })
    try {
      const peopleData = await axios.get('https://swapi.dev/api/people')
      peopleData.data.results.map(async characterData => {
        // console.log(characterData)
        // console.log(await characterData.homeworld, characterData)
        const characterHomeWorld = await axios.get(characterData.homeworld)
        // console.log(characterHomeWorld.data)
        const characterSpecies = await axios.get(characterData.species)
        console.log(characterSpecies)
        const peopleState = this.state.people
        // peopleState.push({ characterData, characterHomeWorld, characterSpecies })
        peopleState.push({ people: characterData, homeworld: characterHomeWorld.data.name, species: characterSpecies.data.results })
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
        <TableData passingData={this.state} />
      </div>
    );
  }
}

export default App;
