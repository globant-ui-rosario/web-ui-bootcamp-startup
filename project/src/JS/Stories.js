import React, {Component} from 'react'
import Header from './Header'
import {Content} from './Content'
import Footer from './Footer'
import stories from './TheTaleOfThreeBrothers'
import '../CSS/Stories.css'

export default class Stories extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'stories',
      className: 'stories',
      button: 'Show'
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
            <div>
            <StoriesContainer
              number={0}
              title={this.state.title}
              className={this.state.title}
            />
            <StoriesContainer
              number={2}
              title={this.state.title}
              className={this.state.title}
            />
            <StoriesContainer
              number={4}
              title={this.state.title}
              className={this.state.title}
            />
            </div>
          }
        />
        <Footer
          className={this.state.className+'-footer'}
        />
      </div>
    );
  }
}

class ShowStory extends Component {
  render() {
    return (
      <div className={this.props.className+'-showstory'} onClick={this.props.onClick}>{this.props.titleButton}</div>
    );
  }
}

class StoriesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      button: 'Show'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    let {display} = this.state
    if (display === 'inline'){
      this.setState({display: 'none'})
      this.setState({button: 'Show'})
    }
    else {
      this.setState({display: 'inline'})
      this.setState({button: 'Hide'})
    }
  }
  render() {
    return (
      <div className='stories-container'>
        <h1 className='stories-title'>
          {stories[this.props.number].title}
        </h1>
        <div style={{display: this.state.display}} className='stories-text'>
          {stories[this.props.number+1].storie}
        </div>
        <ShowStory
          titleButton={this.state.button+' Story'}
          onClick={this.clickHandler}
          className={this.props.title}
        />
      </div>
    );
  }
}