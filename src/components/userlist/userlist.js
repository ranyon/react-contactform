import React from 'react';
import Userui from '../userui/userui';
import {connect} from 'react-redux'

const UserList = ({users,deleteUser,editUser}) => {

  const userList = users.map (
      (item) => {
        return (
          
         <Userui 
         user ={item} 
         deleteUser = {deleteUser}
         editUser = {editUser}
         />
         
        )
      }
   )
   return <div>{userList}</div>
       
  
 
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)(UserList);