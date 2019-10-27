import React, {Component} from 'react'
import Header from './Header'
import {Content} from './Content'
import Footer from './Footer'
import Text from './TextContent'

export default class Spells extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Spells section'
    }
  }
  render() {
    return (
      <div className='section-spells'>
        <Header 
          title={this.state.content + ' Header'}
        />
        <Content
          content={Text}
        />
        <Footer
          title={this.state.content + ' Footer'} 
        />
      </div>
    );
  }
}