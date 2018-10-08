export const taskValidation = (task, tasks) => {

    if (tasks.length === 0 && task.taskName.trim() !== '') return true

    const isAlreadyExist = tasks.every(currentTask => currentTask.taskName.trim() !== task.taskName.trim())

    if (!isAlreadyExist) return false
    else if (task.taskName.trim() !== '') return true
    else return false
}
export const getTasksFromLocalStorage = () => {
    if (localStorage.getItem('tasks') === null) return []
    else return JSON.parse(localStorage.getItem('tasks'))
}
export const addTaskToLocalStorage = (task) => {
    let tasks = [...getTasksFromLocalStorage(), task]
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
export const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const createTask = (taskName, taskPriority, id) => {
    return { id, taskName, taskPriority, taskStatus: false }
}
export const sortAphabetic = (value, tasks) => {
    if (value === null) {
        return tasks
    }
    else if (value) {
        return tasks
            .map(task => task.taskName)
            .sort()
            .map(taskName => {
                return tasks.filter(task => taskName === task.taskName)[0]
            })
    } else {
        return tasks
            .map(task => task.taskName)
            .reverse()
            .map(taskName => {
                return tasks.filter(task => taskName === task.taskName)[0]
            })
    }
}

export const sortByStatus = (value) => {

}
export const sortByPriority = (value) => {

}