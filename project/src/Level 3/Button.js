import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Buttons.css';

export default class Button extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <div className={`${title.toLowerCase()}-button`} onClick={onClick}>
        <Link 
          className = {`${title.toLowerCase()}-button-textcontent`}
          to = {`/${title}`.toLowerCase()}>{title}
        </Link>
      </div>
    );
  }
}