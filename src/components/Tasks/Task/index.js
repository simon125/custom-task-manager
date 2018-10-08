import React from 'react'

import './style.css'

const Task = ({ task, handleOnDeleteClick, handleOnChange, index }) => {

    const statusCheckBox = task.taskStatus ?
        <label className="tasks-container__task--status">
            <i style={{ color: 'orange' }} className="fas fa-check-square"></i>
            <input style={{ display: 'none' }} onChange={handleOnChange} type="checkbox" defaultChecked />
        </label>
        :
        <label className="tasks-container__task--status">
            <i style={{ color: 'rgb(182, 160, 145)' }} className="far fa-square"></i>
            <input style={{ display: 'none' }} onChange={handleOnChange} type="checkbox" />
        </label>

    return (
        <li className="tasks-container__task">
            <p className="tasks-container__task--name">{task.taskName}</p>
            <p className="tasks-container__task--priority">{task.taskPriority}</p>
            <p className="tasks-container__task--status">{statusCheckBox}</p>
            <p className="btn-wrapper">
                <button className="tasks-container__task--btn" onClick={handleOnDeleteClick}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </p>
        </li>
    )
}

export default Task
