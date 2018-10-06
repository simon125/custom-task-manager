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
        this.setState({
            paginationOption: {
                ...this.state.paginationOption,
                resultsPerPage: event.target.value
            }
        })
    }


    render() {
        const { tasks, handleOnDeleteClick, handleOnChange } = this.props

        const start = this.state.paginationOption.currentPage
        const end = start + this.state.paginationOption.resultsPerPage
        const tasksToRender = tasks.slice(start, end)

        // const renderTodos = currentTodos.map((todo, index) => {
        //     return <li key={index}>{todo}</li>;
        // });


        // Logic for displaying page numbers
        // const pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        //   pageNumbers.push(i);
        // }

        // const renderPageNumbers = pageNumbers.map(number => {
        //   return (
        //     <button
        //       key={number}
        //       id={number}
        //       onClick={this.handleClick}
        //     >
        //       {number}
        //     </button>
        //   );
        // });





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
                        changeValuePerPage={this.changeValuePerPage}
                        onPreviousOrNextClick={this.onPreviousOrNextClick}
                    />
                </table>
            </div>
        )
    }
}

export default Tasks