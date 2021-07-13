import React, { Component } from 'react'
import Userui from './components/userui/userui';
import Adduser from './components/ContactsForm/ContactsForm';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
     contacts:[
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



  handleAddContact = (newUser) => {
    this.setState({
      //this code copies what ever is in the state
      contacts: [...this.state.contacts, newUser]
    })
}

  render() {


    return (
      <div>
         <Adduser addUser ={this.handleAddContact}/>
        <br/>
        
        {this.state.contacts.map((contact,index) =>{
          return(
            <>
          <Userui name={contact.name} number={contact.number} location={contact.location}/>
            </>
          )
        })}
               
      </div>
    )
  }
}
