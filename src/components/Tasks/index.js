import React, { Component } from 'react'
import Task from '../Task'
import TableHeader from '../TableHeader'
import TableFooter from '../TableFooter'

import { sortAphabetic, sortByStatus } from '../../logic'

class Tasks extends Component {

    state = {
        paginationOption: {
            currentPage: 1,
            resultsPerPage: 5
        },
        sortOption: {
            sortByPriority: null,
            sortByStatus: null,
            sortAlphabetic: null
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
        this.setState({
            paginationOption: {
                ...this.state.paginationOption,
                resultsPerPage: event.target.value
            }
        })
    }

    handleOnTaskName = () => {
        if (this.state.sortOption.sortAlphabetic === null) {
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortAlphabetic: true
                }
            })
        } else
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortAlphabetic: !this.state.sortOption.sortAlphabetic
                }
            })
    }
    handleOnPriorityClick = () => {
        if (this.state.sortOption.sortByPriority === null) {
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortByPriority: true
                }
            })
        } else
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortByPriority: !this.state.sortOption.sortByPriority
                }
            })
    }
    handleOnDoneClick = () => {
        if (this.state.sortOption.sortByStatus === null) {
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortByStatus: true
                }
            })
        } else
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    sortByStatus: !this.state.sortOption.sortByStatus
                }
            })
    }
    render() {
        const { tasks, handleOnDeleteClick, handleOnChange } = this.props
        let sortedTasks = sortAphabetic(this.state.sortOption.sortAlphabetic, tasks)
        sortedTasks = sortByStatus(this.state.sortOption.sortByStatus, sortedTasks)
        const start = this.state.paginationOption.currentPage * 1
        const end = start * 1 + this.state.paginationOption.resultsPerPage * 1
        const paginatedTasks = sortedTasks.slice(start, end)

        // console.log("tasks.length:  ", tasks)

        return (
            <div>
                <table>
                    <TableHeader
                        handleOnTaskName={this.handleOnTaskName}
                        handleOnPriorityClick={this.handleOnPriorityClick}
                        handleOnDoneClick={this.handleOnDoneClick} />
                    <tbody>
                        {
                            tasks.length !== 0 ?
                                paginatedTasks.map((task, i) => {
                                    return <Task
                                        index={i + 1}
                                        key={task.id}
                                        task={task}
                                        handleOnDeleteClick={() => handleOnDeleteClick(task.id)}
                                        handleOnChange={() => handleOnChange(task.id)}
                                    />
                                }
                                )
                                :
                                <tr>
                                    <td>Good work there is no  tasks to do!</td>
                                </tr>
                        }
                    </tbody>
                    <TableFooter
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





