import { Table } from 'react-bootstrap'

const TableData = (props) => {
    console.log(props)
    const peopleState = props.passingData.people
    // const speciesState = props.passingData.species
    // const planetState = props.passingData.planet
    const looping = peopleState.map(characters => {
        return (
            <tr>
                <td>{characters.name}</td>
                <td>{characters.birth_year}</td>
                <td>{characters.height}</td>
                <td>{characters.mass}</td>
                <td>{characters.homeworld}</td>
                <td>{characters.species}</td>
            </tr>
        )
    })

    return (
        <Table
            className='main-table text-light text-center w-75 mx-auto'
            striped
            bordered
            hover
            variant="dark"  >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Homeworld</th>
                    <th>Species</th>
                </tr>
            </thead>
            <tbody>
                {looping}
            </tbody>
        </Table>
    )
}

export default TableData