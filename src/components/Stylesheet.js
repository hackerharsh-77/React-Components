import React from 'react'
import './Style.css';

function Stylesheet(props) {
    const className= props.isValue ? 'demo' : '';
  return (
    <div className="demo">hello Stylesheet</div>
  )
}

export default Stylesheet