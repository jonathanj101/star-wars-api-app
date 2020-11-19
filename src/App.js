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
    const peopleData = await axios.get('https://swapi.dev/api/people')
    const homeWorld = await axios.get('https://swapi.dev/api/planets/')
    console.log(peopleData.data.results)
    peopleData.data.results.map(characterData => {
      const peopleState = this.state.people
      peopleState.push(characterData)
      console.log(homeWorld)
      this.setState({
        people: peopleState
      })
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
