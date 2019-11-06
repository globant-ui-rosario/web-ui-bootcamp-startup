import React, { Component } from 'react'

export default class HouseContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'house-content'
    }
  }
  render() {
    const { title } = this.state
    const { classNameTitle, content, classNameContainer } = this.props
    return (
      <div style={{width: '300px', height: 'auto', marginBottom: '30px'}} className={classNameContainer}>
        <div className={`${title}-${classNameTitle}`}><span>{this.props.title}</span>{content}</div>
      </div>
    );
  }
}