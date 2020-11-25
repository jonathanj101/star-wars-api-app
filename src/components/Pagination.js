import React from 'react'

export const Pagination = (props) => {
    const { count, handleChange } = props

    let array = []

    for (let i = 1; i <= Math.ceil(count / 10); i++) {
        array.push(i)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pagination-lg">
                <li className="page-item">
                    <a
                        className="page-link rounded-circle "
                        href=""
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {array.map(number => {
                    return (
                        <li
                            className='page-item'
                            key={number}>
                            <a
                                className='page-link rounded-circle'
                                name={number}
                                // href={`https://swapi.dev/api/people/?page=${number}`}
                                onClick={handleChange}
                            >
                                {number}
                            </a>
                        </li>
                    )
                })}
                <li className="page-item">
                    <a
                        className="page-link rounded-circle"
                        href=""
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination