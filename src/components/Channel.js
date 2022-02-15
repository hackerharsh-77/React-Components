import React from 'react';

class Channel extends React.Component{
    constructor(){
        super();
        this.state ={
            msg:'this is my channel'
        }
    }

    subscribe()
    {
        this.setState({
            msg:'now it is your channel'
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>{this.subscribe()}}> click me</button>
            </div>
        )    
    }
}

export default Channel;