import React from 'react'

export default function Task(props) {
    return (
        <React.Fragment>
            <li class="list-group-item">
                <label className="form-check-label me-2">{props.task.description}</label>
                <input className="form-check-input" type="checkbox" checked={props.task.done} />
            </li>
        </React.Fragment>
    )
}