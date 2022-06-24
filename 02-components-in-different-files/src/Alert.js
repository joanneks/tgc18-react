function Alert(props) {
    // for Alert, the `message` props will be the error message to display
     return <div style={{
       'backgroundColor': props.bgColor
     }}>{props.message}</div>;
   }

export default Alert;