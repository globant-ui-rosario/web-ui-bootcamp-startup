import React, { Component } from 'react'

export default class SubHeader extends Component {
  render() {
    const { content, subHeaderClassName, subHeaderStyle } = this.props
    return (
      <header className={subHeaderClassName} style={subHeaderStyle}>
        {content}
      </header>
    );
  }
}