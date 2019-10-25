import React, {Component} from 'react'

export default class Characters extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Characters section'
    }
  }
  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}