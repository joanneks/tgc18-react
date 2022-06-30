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
    newUserEmail: ""
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]:event.target.value
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

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <React.Fragment key={user._id}>
              <div class="box">
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

  beginEdit = (user) => {};

  deleteUser = (user) => {};
}
