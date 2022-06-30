import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    newUserName: "",
    newUserEmail: "",
    userBeingEdited: null,
    modifedUserName:"",
    modifiedUserEmail:""
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }

  displayUser = (user) => {
    return (
      <React.Fragment>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <button
          onClick={() => {
            this.beginEdit(user);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            this.deleteUser(user);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    )
  }

  displayEditUser = (user) => {
    return (
      <React.Fragment>
        <div>
          <input type="text" name="modifiedUserName" value={this.state.modifiedUserName} onChange={this.updateFormField}/>
        </div>
        <div>
          <input type="text" name="modifiedUserEmail" value={this.state.modifiedUserEmail} onChange={this.updateFormField}/>
        </div>
        <button onClick={this.processUpdateUser}>Confirm</button>
      </React.Fragment>
    )
  }

  processUpdateUser = () => {
    // clone the object
    const modifiedUser = {
      ...this.state.userBeingEdited,
      name: this.state.modifiedUserName,
      email: this.state.modifiedUserEmail
    }

    // replace into the middle of the array

    // 0. find the index of the user that we want to replace
    let index = -1; // NOT FOUND
    for (let i =0; i < this.state.users.length; i++) {
      if (this.state.users[i]._id === modifiedUser._id) {
        index = i;
        break;
      }
    }

    if (index===-1) {
      return;
    }

    // 1. clone the array in the state
    const cloned = [
      ...this.state.users.slice(0, index),
      modifiedUser,
      ...this.state.users.slice(index+1)
    ]

    this.setState({
      users: cloned,
      userBeingEdited: null // indicate that no user is being edited at the moment 
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <React.Fragment key={user._id}>
              <div class="box">
                 {
                    this.state.userBeingEdited === null || this.state.userBeingEdited._id !== user._id ?
                      this.displayUser(user)
                      :
                      this.displayEditUser(user)
                 }


              </div>
            </React.Fragment>
          );
        })}
        {this.renderAddUser()}
      </div>
    );
  }

  addUser = () => {
    let userObject = {
      _id: Math.floor(Math.random() * 10000 + 1),
      name: this.state.newUserName,
      email: this.state.newUserEmail
    }
    // 1. clone the original array
    let cloned = [...this.state.users];

    // 2. add the new user to the cloned array
    cloned.push(userObject);

    // alternatively, do #1 and #2 together
    // let cloned = [...this.state.users, userObject]

    // 3. replace the cloned array into the state
    this.setState({
      users: cloned
    })

    // one statement to settle all of the above
    // let { newUserName: name, newUserEmail : email} = this.state;
    // this.setState({
    //   users: [...this.state.users, {
    //     _id: Math.floor(Math.random()*10000 + 1),
    //     name, email
    //   }]
    // })
  };

  beginEdit = (user) => {
    // 1. add in a state variable to remember which user is being edited
    this.setState({
      userBeingEdited: user,
      modifiedUserName: user.name,
      modifiedUserEmail: user.email
    })
  };

  deleteUser = (user) => { };
}
