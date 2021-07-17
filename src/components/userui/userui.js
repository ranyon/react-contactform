import React, { Component } from 'react'
import  {useState} from 'react';
import Button from 'react-bootstrap/Button';
import EditForm from '../editform/editform';
import Modal from "react-bootstrap/Modal";


const Userui = ({user,deleteUser, editUser}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event)=> {
            deleteUser(user.id)
    }



    return (
    <>
        <div className ="users">
           <h3>Name:{user.name}</h3> 
           <h3>Email:{user.email}</h3> 
           <h3>Gen:{user.gen}</h3> 
           
           <Button variant="primary" onClick={handleShow}>Edit</Button>{' '} <br />
           <Button variant="secondary" onClick ={handleDelete}>Delete</Button>{' '}
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          
          <EditForm
            user={user}
            editUser={editUser}
            closeModal={handleClose}
            />
            
        </Modal.Body>
      </Modal>


    </>
    );
}

export default Userui;
