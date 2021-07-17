import React from 'react';
import Userui from '../userui/userui';

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

export default UserList;