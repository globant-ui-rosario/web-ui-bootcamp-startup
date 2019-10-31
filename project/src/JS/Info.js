import React, {Component} from 'react'
import Header from './Header'
import {Content} from './Content'
import Footer from './Footer'
import stories from './TheTaleOfThreeBrothers'
import '../CSS/Info.css'

export default class Stories extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'stories',
      className: 'stories',
      display: 'none',
      button: 'Show'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    if (this.state.display == 'none'){
      this.setState({display: 'inline'})
      this.setState({button: 'Hide'})
    }
    else {
      this.setState({display: 'none'})
      this.setState({button: 'Show'})
    }
  }
  render() {
    return (
      <div className='section-stories'>
        <Header
          displaySearchBar = {'none'}
          section={this.state.title}
        />
        <Content
          className={this.state.title+'-section'}
          content={
          <div className='stories-container'>
            <h1 className='stories-title'>
            {stories[0].title}
            </h1>
            <div style={{display: this.state.display}} className='stories-text'>
              {stories[1].storie}
            </div>
          <ShowStory
            title={this.state.button+' Story'}
            onClick={this.clickHandler}
            className={this.state.title}
          />
          </div>
          }
        />
        <Footer
          className={this.state.className+'-footer'}
          title={this.state.content + ' Footer'}
        />
      </div>
    );
  }
}

class ShowStory extends Component {
  render() {
    return (
      <div className={this.props.className+'-showstory'} onClick={this.props.onClick}>{this.props.title}</div>
    );
  }
}