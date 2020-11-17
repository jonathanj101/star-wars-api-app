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
      planet: [],
      species: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        response.data.results.map(e => {
          var peopleState = this.state.people
          peopleState.push(e)
          return this.setState({
            people: peopleState,
          })
        })
      })
      .catch(error => {
        console.log(error)
      })
    axios.get('https://swapi.dev/api/planets')
      .then(response => {
        response.data.results.map(e => {
          var planetState = this.state.planet
          planetState.push(e)
          return this.setState({
            planet: planetState
          })
        })
      })
      .catch(error => {
        console.log(error)
      })
    axios.get('https://swapi.dev/api/species')
      .then(response => {
        response.data.results.map(e => {
          var speciesState = this.state.species
          speciesState.push(e)
          return this.setState({
            species: speciesState
          })
        })
      })
      .catch(error => {
        console.log(error)
      })
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
