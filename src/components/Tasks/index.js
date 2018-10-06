import React from 'react'
import Task from '../Task'

const Tasks = ({ tasks }) => {
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
                        tasks.length === 0 ?
                            tasks.map(task => <Task key={Date.now()} task={task} />)
                            :
                            <tr>
                                <td>Good work there is no  tasks to do!</td>
                            </tr>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>The table footer</td>
                        <td>The table footer</td>
                        <td>The table footer</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Tasks