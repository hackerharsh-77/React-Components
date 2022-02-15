import React, { Component } from 'react'

export class CFunctionClick extends Component {
    constructor(props){
        super(props);
        //this.changeEvent=this.changeEvent.bind(this);
        this.state={
            course:"MCA",
            roll:this.props.roll
        }
    }

    changeEvent=()=>{
        
        this.setState({
            course:"BCA"
        })
        console.log("hello harsh",this.props.roll); 
    }
  render() {
      const numbers=[3,4,5];
      const newNumbers=numbers.map(function(){
          return <li>{numbers}</li>
      })
    return (
      <div>
          <button onClick={this.changeEvent}>Hit me</button>
          {this.props.roll}
          <ul>{newNumbers}</ul>
      </div>
    )
  }
}

export default CFunctionClick