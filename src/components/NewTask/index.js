import React from 'react'

const NewTask = ({ handleOnSubmit }) => {
    return (
        <div>
            <form onSubmit={handleOnSubmit}>

                <input name="taskName" type="text" placeholder="Enter task name..." />

                <input type="submit" value="Add new task" />

            </form>
        </div>
    )
}

export default NewTask