import React, {Component} from 'react'

export default class Content extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
        {this.props.content}
      </section>
    );
  }
}