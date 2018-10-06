import React, { Component } from 'react'
import NewTasks from './components/NewTask'
import Tasks from './components/Tasks'

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

    const taskName = event.target.taskName,
      taskPriority = event.target.taskPriority,
      task = createTask(taskName, taskPriority)

    if (taskValidation(task)) {

      this.setState({
        tasks: [...this.state.tasks,]
      }, () => {
        addTaskToLocalStorage(task)
      })
    } else console.log('sth went wrong') //// HERE will be display alert
  }

  render() {
    return (
      <React.Fragment>
        <NewTasks
          handleOnSubmit={this.handleOnSubmit}
        />
        <Tasks
          tasks={this.state.tasks}
        />
      </React.Fragment>
    )
  }
}

export default App
