import React from 'react'

const TableFooter = ({ onPreviousOrNextClick, changeValuePerPage, indexOfLastTodo, start, end }) => {
    return (
        <tfoot>
            <tr>
                <td>
                    Rows per page:
                    <select onChange={changeValuePerPage} name="perPage" id="perPage">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </td>
                <td>{start} - {end} of {indexOfLastTodo}</td>
                <td><button onClick={() => onPreviousOrNextClick(false)}>previous</button></td>
                <td><button onClick={() => onPreviousOrNextClick(true)}>next</button></td>
            </tr>
        </tfoot>
    )
}

export default TableFooter
