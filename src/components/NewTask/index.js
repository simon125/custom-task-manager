import React from 'react'

const NewTask = ({ handleOnSubmit }) => {
    return (
        <div>
            <form onSubmit={handleOnSubmit}>

                <input name="taskName" type="text" placeholder="Enter task name..." />
                <ul>
                    <li>
                        <label htmlFor="highPriority">High</label>
                        <input defaultChecked value="High" type="radio" name="taskPriority" id="highPriority" />
                    </li>
                    <li>
                        <label htmlFor="mediumPriority">Medium</label>
                        <input value="Medium" type="radio" name="taskPriority" id="mediumPriority" />
                    </li>
                    <li>
                        <label htmlFor="lowPriority">Low</label>
                        <input value="Low" type="radio" name="taskPriority" id="lowPriority" />
                    </li>
                </ul>

                <input type="submit" value="Add new task" />

            </form>
        </div>
    )
}

export default NewTask