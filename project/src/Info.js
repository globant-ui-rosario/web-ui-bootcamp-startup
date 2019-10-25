import React, {Component} from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer'

export default class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Info section'
    }
  }
  render() {
    return (
      <div className='section-info'>
        <Header
          title={this.state.content + ' Header'}
        />
        <Content
          content={this.state.content}
        />
        <Footer 
          title={this.state.content + ' Footer'}
        />
      </div>
    );
  }
}