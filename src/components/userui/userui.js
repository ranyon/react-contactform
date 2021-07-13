import React, { Component } from 'react'

export default class Userui extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <center>
                    <hr />
                    <h3>New contact added</h3>
            <p>Name: {this.props.name}</p>
            <p>Number: {this.props.number}</p>
            <p>Location: {this.props.location}</p>
                </center>
            <hr />
            </div>
        )
    }
}
