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
            number:'',
            location:''

        })
       
    }




    render(props) {

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
                        <h3>Number</h3>
                    <input type="number" name="number" placeholder='number' value={this.state.number} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label htmlFor="Location">
                        <h3>Location</h3>
                    <input type="text" name="location" placeholder='location' value={this.state.location} onChange={this.handleChange}/>
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
