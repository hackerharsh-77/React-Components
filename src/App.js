import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import Stylesheet from './components/Stylesheet';
import Forms from './components/Forms';
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';

class App extends React.Component
{
  render()
  {
    const numbers=[3,4,5];
    return(
      <div className='App'>
        {/* <Header name="harsh" /> 
        <CHeader name="harsh" />
        <Channel />
        <FunctionClick />
        <CFunctionClick roll="27" numbers={numbers} /> */}
        {/* <Stylesheet isValue={true}/> */}
        {/* <Forms /> */}
        {/* <Routing /> */}
        <LifeCycleA />
      </div>
    )
  }
  
}

export default App;
