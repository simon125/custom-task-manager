import React from 'react'
import './style.css'

const NewTask = ({ handleOnSubmit }) => {
    return (
        <div className="form-container">
            <header className="form-container__header">Create new task</header>
            <form onSubmit={handleOnSubmit}>
                <input title="max 27 characters" className="form-container__task-name" autoComplete="off" id="taskName" name="taskName" type="text" placeholder="Enter task name..." />

                <p className="choice-label">
                    Choose priority
                </p>
                <ul className="form-container__priority">
                    <li>
                        <input className="form-container__radio-buttons" defaultChecked value="High" type="radio" name="taskPriority" id="highPriority" />
                        <label className="form-container__labels" htmlFor="highPriority">High</label>
                    </li>
                    <li>
                        <input className="form-container__radio-buttons" value="Medium" type="radio" name="taskPriority" id="mediumPriority" />
                        <label className="form-container__labels" htmlFor="mediumPriority">Medium</label>
                    </li>
                    <li>
                        <input className="form-container__radio-buttons" value="Low" type="radio" name="taskPriority" id="lowPriority" />
                        <label className="form-container__labels" htmlFor="lowPriority">Low</label>
                    </li>
                </ul>
                <input className="form-container__submit" type="submit" value="Add new task" />
            </form>
        </div>
    )
}

export default NewTask