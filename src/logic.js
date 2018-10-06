export const taskValidation = (task) => {
    console.log(task)
}

export const getTasksFromLocalStorage = () => {
    if (localStorage.getItem('tasks') === null) return []
    else return JSON.parse(localStorage.getItem('tasks'))
}

export const addTaskToLocalStorage = (task) => {
    let tasks = getTasksFromLocalStorage()
    localStorage.setItem('films', JSON.stringify([...tasks, task]))
}

export const createTask = (taskName, taskPriority) => {
    return { taskName, taskPriority, taskStatus: false }
}
