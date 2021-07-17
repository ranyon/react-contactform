import React, { Component } from 'react'
import Userui from './components/userui/userui';
import UserList from './components/userlist/userlist';
import Adduser from './components/ContactsForm/ContactsForm';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
     users:[
      //  {
      //    name:'mark',
      //    email:'g@gmail.com',
      //    gen:'12'
      //  },
      //  {
      //    name:'kiki',
      //    email:'g@gmail.com',
      //    gen:'12'
      //  },
      //  {
      //    name:'boss',
      //    email:'g@gmail.com',
      //    gen:'12'
      //  }
     ]
    }
  }



  handleDeleteUser =(userId)=> {
    const savedusers = this.state.users.filter(
          (user)=>{
             return user.id !==userId;
          })
          this.setState({users: savedusers})
  }

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };



  handleAddContact = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      //this code copies what ever is in the state
      users: [...this.state.users, newUser]
    })
}

  render() {


    return (
      <div>
         <Adduser addUser ={this.handleAddContact}/>
        <br/>
        <center>
        <UserList
          users={this.state.users}
          deleteUser = {this.handleDeleteUser}
          editUser = {this.handleEditUser}
          />
          </center>
               
      </div>
    )
  }
}
