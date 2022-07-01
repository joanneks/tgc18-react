import React from 'react'
import Task from './components/Task'

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                _id: 1,
                description: "Wash the car",
                done: false
            },
            {
                _id: 2,
                description: "Clean the toilet",
                done: false
            },
            {
                _id: 3,
                description: "Pay the bills",
                done: false
            }
        ],
        newTaskDescription:""
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    addTask = (event) => {
        let newTask = {
            _id: Math.floor(Math.random() * 99999 + 10000),
            description: this.state.newTaskDescription,
            done: false
        }

        // clone the existing array from the state
        const cloned = this.state.tasks.slice();

        // modify the cloned
        cloned.push(newTask);

        this.setState({
            tasks: cloned
        })

        // elegant solution (alternative:)
        // this.setState({
        //     tasks: [...this.state.tasks, newTask]
        // })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul class="list-group">
                    {
                        this.state.tasks.map(t => <Task task={t} key={t._id} />)
                    }
                </ul>

                <h2 className="mt-3">Add New Task</h2>
                <div>
                    <label>Description:</label>
                    <input type="text" className="form-control"
                                       value={this.state.newTaskDescription}
                                       name="newTaskDescription"
                                       onChange={this.updateFormField} />
                    <button className="btn btn-primary btn-sm mt-2" onClick={this.addTask}>Add New Task</button>
                </div>
            </React.Fragment>
        )
    }
}