import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import starWarsImg from '../image/star-wars-logo.jpg'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    onChange = e => {
        const { value } = e.target
        this.setState({ text: value })
        this.props.searchCharacter(this.state.text)
    }
    render() {
        return (
            <div>
                <Card
                    className="w-25 h-25 m-5 mx-auto">
                    <Card.Img
                        src={starWarsImg} />
                </Card>
                <div className="input-group m-5 mx-auto w-50">
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Search a character by their name" />
                    <div className="input-group-append">
                    </div>
                </div>
            </div >
        )
    }
}

export default Search
