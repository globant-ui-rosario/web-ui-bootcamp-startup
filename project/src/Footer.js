import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Footer: WebApp created by David Tissera'
    }
  }
  render() {
    return (
      <footer>
        {this.state.title}
      </footer>
    );
  }
}