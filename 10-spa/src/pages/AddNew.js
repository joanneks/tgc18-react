import React from 'react'

export default function AddNew(props) {
    return (
        <React.Fragment>
            <h1>Add New</h1>
            <div>
                <label>Title</label>
                <input className="form-control"
                       type="text" 
                       value={props.newTitle}
                       onChange={(event)=>{
                        props.updateFormField('newTitle', event.target.value)
                       }}/>
            </div>
            <div>
                <label>Ingredients</label>
                <input
                    className="form-control"
                    type="text"
                    value={props.newIngredients}
                    onChange={(event)=>{
                        props.updateFormField('newIngredients', event.target.value)
                    }}
                
                />
            </div>
            <button className="btn btn-primary mt-3"
                    onClick={props.addNew}
            >Add</button>
        </React.Fragment>
    )

}