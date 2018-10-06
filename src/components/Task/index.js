import React from 'react'

const Task = ({ task }) => {
    return (
        <tr>
            <td>{task.taskName}</td>
            {/* <td>{task.taskPriority}</td> */}
            <td>{task.taskStatus}</td>
            <td><button onClick={() => console.log(12345)}>delete</button></td>
        </tr>
    )
}

export default Task
