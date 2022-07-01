import React from "react";

// GST is a managed component
// its data and the functions it will call are
// managed by its parent
export default function GST(props) {

    return (
      <React.Fragment>
        <div>
          <label>Bill amount:</label>
          <input
            type="text"
            name="bill"
            value={props.bill}
            onChange={async (event)=>{
                await props.updateField(event);
                props.calculate();
            }}
          />
          <button onClick={props.calculate}>Calculate GST</button>
        </div>
      </React.Fragment>
    );
  
  
}
