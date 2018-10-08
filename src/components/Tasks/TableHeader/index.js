import React from 'react'
import './style.css'

const TableHeader = ({ handleOnTaskName, handleOnPriorityClick, handleOnDoneClick }) => {
    return (
        <li >
            <header className="header-container__task">
                <p className="header-container__task--name" onClick={handleOnTaskName}>
                    <span className="scale-on-hover">
                        Task name
                    </span>
                </p>
                <p className="header-container__task--priority" onClick={handleOnPriorityClick}>
                    <span className="scale-on-hover">
                        Priority
                    </span>
                </p>
                <p className="header-container__task--status" onClick={handleOnDoneClick}>
                    <span className="scale-on-hover">
                        Done
                    </span>
                </p>
                <p className="header-container__task--btn" onClick={handleOnDoneClick}>
                </p>
            </header>
        </li>
    )
}

export default TableHeader
