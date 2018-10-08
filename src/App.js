import React, { Component } from 'react'
import NewTasks from './components/NewTask'
import Tasks from './components/Tasks'
import Alert from './components/Alert/index'
import uuid from 'uuid'
import './app.css'

import {
  getTasksFromLocalStorage,
  taskValidation,
  addTaskToLocalStorage,
  createTask,
  updateLocalStorage
} from './logic'

class App extends Component {

  state = {
    tasks: [],
    showAlert: false
  }

  componentDidMount() {
    const tasks = getTasksFromLocalStorage()
    this.setState({ tasks })
  }
  handleOnSubmit = event => {

    event.preventDefault()

    const taskName = event.target.taskName.value,
      taskPriority = event.target.taskPriority.value,
      task = createTask(taskName, taskPriority, uuid())

    if (taskValidation(task, this.state.tasks)) {
      this.setState({
        tasks: [...this.state.tasks, task]
      }, () => {
        addTaskToLocalStorage(task)
      })
      event.target.taskName.value = ''
    } else this.setState({ showAlert: true }, () => setTimeout(() => this.setState({ showAlert: false }), 2000))
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
    return (
      <div className="app">
        <NewTasks
          handleOnSubmit={this.handleOnSubmit}
        />
        <Alert showAlert={this.state.showAlert} />
        <Tasks
          tasks={this.state.tasks}
          handleOnDeleteClick={this.handleOnDeleteClick}
          handleOnChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default App
