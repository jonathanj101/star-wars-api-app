import { Table } from 'react-bootstrap'

const TableData = (props) => {
    console.log(props)
    const { people, birthDate, height, mass, planet, species } = props
    console.log(props.state)


    return (
        <Table
            className='main-table bg-dark text-light text-center w-75 mx-auto'
            striped
            bordered
            hover  >
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
                <tr>
                    <td>{people}</td>
                    <td>{birthDate}</td>
                    <td>{height}</td>
                    <td>{mass}</td>
                    <td>{planet}</td>
                    <td>{species}</td>
                </tr>

            </tbody>
        </Table>
    )
}

export default TableData