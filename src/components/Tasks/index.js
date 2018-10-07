import React, { Component } from 'react'
import Task from '../Task'
import TableHeader from '../TableHeader'
import TableFooter from '../TableFooter'

class Tasks extends Component {

    state = {
        paginationOption: {
            currentPage: 1,
            resultsPerPage: 5
        },
        sortOption: {
            sortByPriority: false,
            sortByStatus: false,
            sortAlphabetic: false
        }
    }

    onPreviousOrNextClick = (previousOrNext) => {
        if (previousOrNext) {
            this.setState({
                paginationOption: {
                    ...this.state.paginationOption,
                    currentPage: this.state.paginationOption.currentPage + 1
                }
            })
        } else {
            this.setState({
                paginationOption: {
                    ...this.state.paginationOption,
                    currentPage: this.state.paginationOption.currentPage - 1
                }
            })
        }
    }
    changeValuePerPage = (event) => {
        console.log("to jest wartość per page ", event.target.value)
        this.setState({
            paginationOption: {
                ...this.state.paginationOption,
                resultsPerPage: event.target.value
            }
        })
    }
    render() {
        const { tasks, handleOnDeleteClick, handleOnChange } = this.props

        const start = this.state.paginationOption.currentPage * 1
        const end = start * 1 + this.state.paginationOption.resultsPerPage * 1
        const tasksToRender = tasks.slice(start, end)
        console.log("tasks.length:  ", tasks)

        return (
            <div>
                <table>
                    <TableHeader />
                    <tbody>
                        {
                            tasks.length !== 0 ?
                                tasksToRender.map((task, i) => <Task
                                    index={i + 1}
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
                    <TableFooter
                        lenghtTasksToRender={tasksToRender.length}
                        resultsPerPage={this.state.paginationOption.resultsPerPage}
                        indexOfLastTodo={tasks.length}
                        start={start}
                        end={end}
                        changeValuePerPage={this.changeValuePerPage}
                        onPreviousOrNextClick={this.onPreviousOrNextClick}
                    />
                </table>
            </div>
        )
    }
}

export default Tasks