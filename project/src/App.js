import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Level 0/Router';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="document">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
