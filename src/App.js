import React, { Component } from 'react'
import NewTasks from './components/NewTask'
import Tasks from './components/Tasks'
import uuid from 'uuid'

import {
  getTasksFromLocalStorage,
  taskValidation,
  addTaskToLocalStorage,
  createTask,
  updateLocalStorage
} from './logic'

class App extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    const tasks = getTasksFromLocalStorage()
    this.setState({ tasks })
  }

  handleOnSubmit = event => {

    event.preventDefault()

    const taskName = event.target.taskName.value,
      taskPriority = event.target.taskPriority,
      task = createTask(taskName, taskPriority, uuid())
    if (taskValidation(task)) {
      this.setState({
        tasks: [...this.state.tasks, task]
      }, () => {
        addTaskToLocalStorage(task)
      })
    } else console.log('sth went wrong') //// HERE will be display alert
  }

  handleOnDeleteClick = (id) => {
    const tasks = this.state.tasks.filter(task => id !== task.id)
    this.setState({ tasks }, () => {
      updateLocalStorage(tasks)
    })
  }
  handleOnChange = (id) => {
    const tasks = this.state.tasks.map(task => {
      if (id === task.id) {
        task.taskStatus = !task.taskStatus
        return task
      }
      else return task
    })
    this.setState({ tasks }, () => {
      updateLocalStorage(tasks)

    })
  }



  render() {

    console.log(this.state.tasks)

    return (
      <React.Fragment>
        <NewTasks
          handleOnSubmit={this.handleOnSubmit}
        />
        <Tasks
          tasks={this.state.tasks}
          handleOnDeleteClick={this.handleOnDeleteClick}
          handleOnChange={this.handleOnChange}
        />
      </React.Fragment>
    )
  }
}

export default App
