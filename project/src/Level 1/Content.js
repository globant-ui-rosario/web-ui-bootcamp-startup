import React, { Component } from 'react'

export default class Content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { content, className, displayContent } = this.props
    return (
      <section style={{display: displayContent}} className={className}>
        {content}
      </section>
    );
  }
}
