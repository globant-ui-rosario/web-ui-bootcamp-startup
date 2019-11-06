import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {display, inputChange, valueChange} = this.props
    return (
      <input 
        id='search-bar'
        type='text' 
        placeholder='Search...'
        onChange={inputChange}
        value={valueChange}
        style={{display: display}}>
      </input>
    );
  }
}