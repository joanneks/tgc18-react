import React from 'react'

export default function Task(props) {
    return (
        <React.Fragment>
            <li className="list-group-item">
                <label className="form-check-label me-2">{props.task.description}</label>
                <input className="form-check-input" 
                       type="checkbox"
                       checked={props.task.done}
                       onChange={()=>{
                        props.updateTaskDone(props.task)
                       }}
                 />
                 <button className="btn btn-primary btn-sm mx-2"
                   onClick={()=>{
                    props.beginEdit(props.task);
                 }}>Edit</button>

                 <button className="btn btn-danger btn-sm mx-2"
                  onClick={()=>{
                        props.delete(props.task)
                    }
                  }>Delete</button>
            </li>
        </React.Fragment>
    )
}