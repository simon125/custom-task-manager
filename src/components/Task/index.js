import React from 'react'

const Task = ({ task, handleOnDeleteClick, handleOnChange, index }) => {

    const statusCheckBox = task.taskStatus ?
        <input onChange={handleOnChange} type="checkbox" defaultChecked />
        :
        <input onChange={handleOnChange} type="checkbox" />

    return (
        <tr>
            <td>{index})  </td>
            <td>{task.taskName}</td>
            <td>{task.taskPriority}</td>
            <td>{statusCheckBox}</td>
            <td><button onClick={handleOnDeleteClick}>delete</button></td>
        </tr>
    )
}

export default Task
