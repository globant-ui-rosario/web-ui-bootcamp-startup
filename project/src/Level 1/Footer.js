import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className} id='footer'>
        Harry Potter API Project
        developed for Globant Bootcamp
        by David Tissera / davidtissera@outlook.com 
        - github.com/davidtissera1 
      </footer>
    );
  }
}