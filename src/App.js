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
      birthDate: [],
      height: [],
      mass: [],
      planet: [],
      species: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        // console.log(response.data)
        response.data.results.map(e => {
          var peopleState = this.state.people
          var birthDataState = this.state.birthDate
          var heightState = this.state.height
          var massState = this.state.mass
          peopleState.push(e.name)
          heightState.push(e.height)
          birthDataState.push(e.birth_year)
          massState.push(e.mass)
          return this.setState({
            people: peopleState,
            height: heightState,
            birthDate: birthDataState,
            mass: massState
          })
        })
      })
      .catch(error => {
        console.log(error)
      })
    axios.get('https://swapi.dev/api/planets')
      .then(response => {
        // console.log(response.data)
        response.data.results.map(e => {
          var planetState = this.state.planet
          planetState.push(e.name)
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
        // console.log(response.data)
        response.data.results.map(e => {
          var speciesState = this.state.species
          speciesState.push(e.name)
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
