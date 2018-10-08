import React, { Component } from 'react'
import Task from './Task'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

import { sortAphabetic, sortByStatus, sortByPriority, paginateTasks } from '../../logic'

import './style.css'

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
        let sortAlphabetic = null
        if (this.state.sortOption.sortAlphabetic === null) sortAlphabetic = true
        else sortAlphabetic = !this.state.sortOption.sortAlphabetic

        this.setState({
            sortOption: {
                sortByPriority: null,
                sortByStatus: null,
                sortAlphabetic
            }
        })
    }
    handleOnPriorityClick = () => {
        let sortByPriority = null
        if (this.state.sortOption.sortByPriority === null) sortByPriority = true
        else sortByPriority = !this.state.sortOption.sortByPriority

        this.setState({
            sortOption: {
                sortAlphabetic: null,
                sortByStatus: null,
                sortByPriority
            }
        })
    }
    handleOnDoneClick = () => {
        let sortByStatus = null
        if (this.state.sortOption.sortByStatus === null) sortByStatus = true
        else sortByStatus = !this.state.sortOption.sortByStatus

        this.setState({
            sortOption: {
                sortByPriority: null,
                sortAlphabetic: null,
                sortByStatus
            }
        })
    }
    render() {
        const { tasks, handleOnDeleteClick, handleOnChange } = this.props
        let sortedTasks = sortAphabetic(this.state.sortOption.sortAlphabetic, tasks)

        sortedTasks = sortByStatus(this.state.sortOption.sortByStatus, sortedTasks)
        sortedTasks = sortByPriority(this.state.sortOption.sortByPriority, sortedTasks)

        const { paginatedTasks, start, end } = paginateTasks(this.state.paginationOption.currentPage, this.state.paginationOption.resultsPerPage, sortedTasks)

        return (
            <div className="container">
                <ul className="tasks-container">
                    <TableHeader
                        handleOnTaskName={this.handleOnTaskName}
                        handleOnPriorityClick={this.handleOnPriorityClick}
                        handleOnDoneClick={this.handleOnDoneClick} />
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
                            })
                            :
                            <p>Good work there is no  tasks to do!</p>
                    }
                    <TableFooter
                        resultsPerPage={this.state.paginationOption.resultsPerPage}
                        indexOfLastTodo={tasks.length}
                        start={start}
                        end={end}
                        changeValuePerPage={this.changeValuePerPage}
                        onPreviousOrNextClick={this.onPreviousOrNextClick}
                    />
                </ul>
            </div>
        )
    }
}

export default Tasks





