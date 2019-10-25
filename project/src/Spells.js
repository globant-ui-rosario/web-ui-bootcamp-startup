import React, {Component} from 'react'

export default class Spells extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Spells section'
    }
  }
  render() {
    return (
      <div>{this.state.content}</div>
    );
  }
}