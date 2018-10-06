import React, { Component } from 'react'
import NewTasks from './components/NewTask'
import Tasks from './components/Tasks'
import uuid from 'uuid'

import { getTasksFromLocalStorage, taskValidation, addTaskToLocalStorage, createTask } from './logic'

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

    // console.log(event.target)

    const taskName = event.target.taskName.value,
      taskPriority = event.target.taskPriority,
      task = createTask(taskName, taskPriority, uuid())

    console.log(taskName)

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
      localStorage.setItem('tasks', JSON.stringify(tasks))
    })
  }

  render() {
    return (
      <React.Fragment>
        <NewTasks
          handleOnSubmit={this.handleOnSubmit}
        />
        <Tasks
          tasks={this.state.tasks}
          handleOnDeleteClick={this.handleOnDeleteClick}
        />
      </React.Fragment>
    )
  }
}

export default App
