import { Card } from 'react-bootstrap'
import starWarsImg from '../image/star-wars-logo.jpg'

const Search = () => {
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
                    placeholder="Search" />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary bg-dark text-light" type="button">
                        Search
                </button>
                </div>
            </div>
        </div >
    )
}

export default Search