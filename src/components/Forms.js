import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:"",
            address:" "

        }
    }
    handelUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handelAddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.address}`)
        event.prevetDefault();
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>username</label>
              <input type="text" value={this.state.username} onChange={this.handelUsername}></input>
          </div>
          <div>
              <label>Address</label>
              <textarea value={this.state.address} onChange={this.handelAddress}> </textarea>
          </div>
          <button>SUBMIT</button>
      </form>    
    )
  }
}

export default Forms