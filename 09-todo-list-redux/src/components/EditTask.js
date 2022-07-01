import React from 'react'

export default function EditTask(props){
    return(
        <React.Fragment>
            <li class="list-group-item">
                <input type="text" 
                       name="modifiedTaskDescription"
                       value={props.modifiedDescription}
                       onChange={props.updateFormField}
                       className="form-control"
                />
                <button className="btn btn-primary btn-sm mt-3" onClick={props.processUpdate}>Update</button>
            </li>
        </React.Fragment>

    )
}