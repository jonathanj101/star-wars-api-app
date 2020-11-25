import React from 'react'
import { Table } from 'react-bootstrap'

const TableData = (props) => {
    const peopleState = props.passingData
    const looping = peopleState.map((characters, num) => {
        return (
            <tr key={num} >
                <td>{characters.people.name}</td>
                <td>{characters.people.birth_year}</td>
                <td>{characters.people.height}</td>
                <td>{characters.people.mass}</td>
                <td>{characters.homeworld}</td>
                <td>{characters.species}</td>
            </tr>
        )
    })

    return (
        <div>
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
        </div>
    )
}

export default TableData