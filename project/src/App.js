import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import Header from './Header';
import Footer from './Footer';
import './App.css';

/*
  This version contains the initial state of the page with either no funcionallity or styles.
  Only contains the main sections that i've considerate in the previous stage,
  this main sections are: Header, Content and Footer.
  Because the content section will be the bigger one in lines of code i'll put the four content sections in separated files,
  this are Home, Characters, Spells and Info sections.
*/

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
