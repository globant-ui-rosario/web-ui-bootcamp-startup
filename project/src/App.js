import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import './App.css';
import './Sections.css';
import './Buttons.css';

/*
  This version contains the second state of the page with styles but no funcionallity.
  I've decide to separate the styles in three different files for this stage.
  I've to fix the button textcontent which brokes when resize.
*/

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='document'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
