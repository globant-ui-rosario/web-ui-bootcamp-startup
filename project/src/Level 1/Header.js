import React, { Component } from 'react';
import ButtonContainer from '../Level 2/ButtonContainer';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Harry Potter API Project'
    }
  }

  render() {
    const { section } = this.props
    const { title } = this.state
    const {
      onChange,
      onValue,
      displaySearchBar,
      buttonContainerClassName,
      headerTextContentClassName,
    } = this.props

    return (
      <header id="header" className={`${section}-header`}>
        <h1 id="header-textcontent" className={`${headerTextContentClassName}-header-textcontent`}>
          {title}
        </h1>
        <ButtonContainer
          inputChange = {onChange}
          valueChange = {onValue}
          display = {displaySearchBar}
          className = {buttonContainerClassName}
        />
      </header>
    );
  }
}
