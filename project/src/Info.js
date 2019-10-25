import React, {Component} from 'react'

export default class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Info section'
    }
  }
  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}