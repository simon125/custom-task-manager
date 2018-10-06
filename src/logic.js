export const taskValidation = (task) => {
    return true
}

export const getTasksFromLocalStorage = () => {
    if (localStorage.getItem('tasks') === null) return []
    else return JSON.parse(localStorage.getItem('tasks'))
}

export const addTaskToLocalStorage = (task) => {
    console.log(getTasksFromLocalStorage())
    let tasks = [...getTasksFromLocalStorage(), task]
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const createTask = (taskName, taskPriority, id) => {
    return { id, taskName, taskPriority, taskStatus: false }
}
