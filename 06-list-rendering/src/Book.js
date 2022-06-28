// Functional components AKA managed components
export default function Book(props) {
    return <div style={
        {
            'margin': '10px',
            'padding': '10px',
            'border': '1px solid black'
        }
    }>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
    </div>

}