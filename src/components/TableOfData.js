import React from 'react'
import { Table } from 'react-bootstrap'
// import Loading from './LoadingComponent'


const TableData = (props) => {
    const peopleState = props.peopleData
    const peopleData = peopleState.map((characters, num) => {
        return (
            <tr key={num} >
                <td>{num + 1}</td>
                <td>{characters.people.name}</td>
                <td>{characters.people.birth_year}</td>
                <td>{characters.people.height}</td>
                <td>{characters.people.mass}</td>
                <td>{characters.homeWorld}</td>
                <td>{characters.species}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table
                className='main-table text-light text-center w-75 mb-5 mx-auto'
                striped
                bordered
                hover
                variant="dark"  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Homeworld</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData}
                </tbody>
            </Table>
        </div>
    )
}

export default TableData