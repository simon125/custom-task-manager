import React from 'react'

const TableHeader = ({ handleOnTaskName, handleOnPriorityClick, handleOnDoneClick }) => {
    return (
        <thead>
            <tr>
                <th onClick={handleOnTaskName}>Task name</th>
                <th onClick={handleOnPriorityClick}>Priority</th>
                <th onClick={handleOnDoneClick}>Done</th>
                <th>button</th>
            </tr>
        </thead>
    )
}

export default TableHeader
