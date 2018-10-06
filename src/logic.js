export const taskValidation = (task) => {
    return true
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
