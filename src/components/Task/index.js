import React from 'react'

const Task = ({ task, handleOnDeleteClick }) => {
    return (
        <tr>
            <td>{task.taskName}</td>
            {/* <td>{task.taskPriority}</td> */}
            <td>{task.taskStatus}</td>
            <td><button onClick={handleOnDeleteClick}>delete</button></td>
        </tr>
    )
}

export default Task
