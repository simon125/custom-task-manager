import React from 'react'
import './style.css'

const TableFooter = ({ onPreviousOrNextClick, changeValuePerPage, indexOfLastTodo, start, end }) => {

    const onPreviousClick = () => {
        if (start > 0) onPreviousOrNextClick(false)
    }
    const onNextClick = () => {
        if (end < indexOfLastTodo) onPreviousOrNextClick(true)
    }
    return (
        <li>
            <footer>
                <nav>
                    <p className="nav-item">
                        <span className="title">
                            Rows per page:
                        </span>

                        <select onChange={changeValuePerPage} name="perPage" id="perPage">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </p>
                    <p className="nav-item page-numbers">{start} - {end} of {indexOfLastTodo}</p>
                    <p className="nav-item footer__buttons">
                        <button className="footer__button" onClick={onPreviousClick}>
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <button className="footer__button" onClick={onNextClick}>
                            <i className="fas fa-angle-right"></i>
                        </button>
                    </p>
                </nav>
            </footer>
        </li>
    )
}

export default TableFooter
