import React, { Component } from 'react'

export default class Adduser extends Component {
    constructor(props){
        super(props)


        this.state = {
            
                
                    name:'',
                    email:'',
                    gen:''
                
            
        }
    }
    


    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
        this.props.addUser(this.state)
        this.setState({
            name:'',
            email:'',
            gen:''

        })
       
    }




    render() {

        return (
            <div>
                <center>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        <h3>Name</h3>
                    <input type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label htmlFor="number">
                        <h3>Email</h3>
                    <input type="email" name="email" placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label htmlFor="Gen">
                        <h3>Gen</h3>
                    <input type="number" name="gen" placeholder='gen' value={this.state.gen} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <center>
                    <input type="submit" />
                    </center>
                </form>
                </center>
            </div>
        )
    }
}
