import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <ul>
        <li>Original bill: {props.bill}</li>
        <li>GST:{props.gst}</li>
        <li>Service Charge:{props.serviceCharge}</li>
        <li>Total:{props.total}</li>
      </ul>
    </React.Fragment>
  );
}
