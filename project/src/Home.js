import React, {Component} from 'react'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Home section'
    }
  }
  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}