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
                    <tr>
                        <td>The table body</td>
                        <td>with two columns</td>
                    </tr>
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