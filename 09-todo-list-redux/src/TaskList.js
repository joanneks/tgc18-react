import React from 'react'
import AddNewTask from './components/AddNewTask'
import EditTask from './components/EditTask'
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
        newTaskDescription:"",
        modifiedTaskDescription:"",
        taskBeingEdited:{
            _id:0
        }
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

    updateTaskDone = (task) => {
        const modifiedTask = {
            ...task,
            done: !task.done // if task.done was true, it is now false
        }

        const index = this.state.tasks.findIndex( t => t._id === task._id);

        let cloned = [
            ...this.state.tasks.slice(0, index),
            modifiedTask,
            ...this.state.tasks.slice(index+1)
        ]

        this.setState({
            tasks: cloned
        })
    }

    beginEdit = (task) => {
        this.setState({
            taskBeingEdited: task,
            modifiedTaskDescription: task.description
        })
    }

    processUpdate = () => {
        const modifiedTask = {
            ...this.state.taskBeingEdited,
            description: this.state.modifiedTaskDescription
        }

        const index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);

        // clone the array 
        const cloned = this.state.tasks.slice();

        // starting at index (first arg), replace one element (second arg) with the modified task (third arg)
        cloned.splice(index, 1, modifiedTask);

        this.setState({
            tasks: cloned,
            taskBeingEdited:{
                _id:0
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul class="list-group">
                    {
                        this.state.tasks.map(t => {
                            if (this.state.taskBeingEdited._id !== t._id) {
                                return <Task
                                task={t} key={t._id} 
                                updateTaskDone={this.updateTaskDone}
                                beginEdit={this.beginEdit}
                               />
                            } else {
                                return <EditTask key={t._id}
                                                 modifiedDescription={this.state.modifiedTaskDescription}
                                                 updateFormField={this.updateFormField}
                                                 processUpdate={this.processUpdate}/>
                                          
                            }
                        })
                    }
                </ul>

                <AddNewTask newTaskDescription={this.state.newTaskDescription}
                            updateFormField={this.updateFormField}
                            addTask={this.addTask}
                />
               
            </React.Fragment>
        )
    }
}