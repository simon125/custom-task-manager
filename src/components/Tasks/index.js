import React from 'react'
import Task from '../Task'

const Tasks = ({ tasks, handleOnDeleteClick, handleOnChange }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task name</th>
                        <th>Priority</th>
                        <th>Done</th>
                        <th>button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.length !== 0 ?
                            tasks.map(task => <Task
                                key={task.id}
                                task={task}
                                handleOnDeleteClick={() => handleOnDeleteClick(task.id)}
                                handleOnChange={() => handleOnChange(task.id)}
                            />)
                            :
                            <tr>
                                <td>Good work there is no  tasks to do!</td>
                            </tr>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            Rows per page:
                            <select name="perPage" id="perPage">
                                <option value="5">5</option>
                                <option value="5">10</option>
                                <option value="5">15</option>
                            </select>
                        </td>
                        <td>The table footer</td>
                        <td>The table footer</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Tasks