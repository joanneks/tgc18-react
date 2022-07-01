import React from 'react'

export default function AddNewTask(props) {
    return (
        <React.Fragment>
            <h2 className="mt-3">Add New Task</h2>
            <div>
                <label>Description:</label>
                <input type="text" className="form-control"
                                value={props.newTaskDescription}
                                name="newTaskDescription"
                                onChange={props.updateFormField} />
                <button className="btn btn-primary btn-sm mt-2" 
                        onClick={props.addTask}>Add New Task</button>
            </div>
        </React.Fragment>
    )
}
