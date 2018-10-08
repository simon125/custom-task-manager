import React from 'react'
import './style.css'

const Alert = ({ showAlert }) => {

    return (
        showAlert ?
            <div className="alert">
                Wrong format of task, please try again
            </div>
            :
            null
    )
}
export default Alert
