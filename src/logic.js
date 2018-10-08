export const taskValidation = (newTask, existingTasks) => {

    if (existingTasks.length === 0 && newTask.taskName.trim() !== '') return true

    const isAlreadyExist = existingTasks.every(existingTask => existingTask.taskName.trim() !== newTask.taskName.trim())

    if (!isAlreadyExist) return false
    else if (newTask.taskName.trim() !== '') return true
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
    if (value) {
        return tasks
            .map(task => task.taskName)
            .sort()
            .map(taskName => {
                return tasks.filter(task => taskName === task.taskName)[0]
            })
    }
    else {
        return tasks
            .map(task => task.taskName)
            .reverse()
            .map(taskName => {
                return tasks.filter(task => taskName === task.taskName)[0]
            })
    }
}

export const sortByStatus = (value, tasks) => {
    if (value === null) {
        return tasks
    }
    const arr1 = tasks.filter(task => task.taskStatus === true)
    const arr2 = tasks.filter(task => task.taskStatus === false)

    if (value) return [...arr1, ...arr2]
    else return [...arr2, ...arr1]
}
export const sortByPriority = (value, tasks) => {
    if (value === null) {
        return tasks
    }
    const arr1 = tasks.filter(task => task.taskPriority === "High")
    const arr2 = tasks.filter(task => task.taskPriority === "Medium")
    const arr3 = tasks.filter(task => task.taskPriority === "Low")

    if (value) return [...arr1, ...arr2, ...arr3]
    else return [...arr3, ...arr2, ...arr1]
}