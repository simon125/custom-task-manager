import React from 'react'

const TableFooter = ({ onPreviousOrNextClick, changeValuePerPage, indexOfLastTodo, start, end }) => {

    const onPreviousClick = () => {
        if (start > 0) onPreviousOrNextClick(false)
    }
    const onNextClick = () => {
        if (end < indexOfLastTodo) onPreviousOrNextClick(true)
    }

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
                <td><button onClick={onPreviousClick}>previous</button></td>
                <td><button onClick={onNextClick}>next</button></td>
            </tr>
        </tfoot>
    )
}

export default TableFooter
