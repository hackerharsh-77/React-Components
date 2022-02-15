import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

class App extends React.Component
{
  render()
  {
    return(
      <div className='App'>
        <Header name="harsh" /> 
        <CHeader name="harsh" />
        <Channel />
        <FunctionClick />
        <CFunctionClick roll="27" />
      </div>
    )
  }
  
}

export default App;
