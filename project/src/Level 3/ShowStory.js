import React, { Component } from 'react'

export default class ShowStory extends Component {
  render() {
    const { 
      className, 
      onClick, 
      titleButton,
    } = this.props

    return (
      <div className={`${className}-showstory`} onClick={onClick}>{titleButton}</div>
    );
  }
}