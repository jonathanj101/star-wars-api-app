
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import starWarsImg from '../image/star-wars-logo.jpg'

class Search extends Component {
    state = {
        text: ''
    }

    onChangee = e => {
        const { value } = e.target
        this.setState({ text: value })
    }

    onSubmit = () => {
        this.props.searchCharacter(this.state.text)
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div>
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
                            onChange={this.onChangee}
                            placeholder="Type a character name then press search..." />
                        <div className="input-group-append">
                            <button
                                onClick={this.onSubmit}
                                className="btn btn-outline-secondary bg-dark text-light" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Search