import React, { Component } from 'react'
import ShowStory from '../Level 3/ShowStory'
import api from '../Level 3/TextStories'

export default class StoriesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      button: 'Show'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    let { display } = this.state
    if (display === 'inline'){
      this.setState({ display: 'none' })
      this.setState({ button: 'Show' })
    }
    else {
      this.setState({ display: 'inline' })
      this.setState({ button: 'Hide' })
    }
  }
  
  render() {
    const { button, display } = this.state
    const className = "stories"
    const { number, title } = this.props
    return (
      <div>
        {api.stories.map(storie => {
          if (storie.id === number){
            return (
              <div className={`${className}-container`}>
                <h1 className={`${className}-title`}>
                  {storie.title}
                </h1>
                <div style={{display: display}}>
                  {storie.storie}
                </div>
                <ShowStory
                  titleButton={button+' Story'}
                  onClick={this.clickHandler}
                  className={title}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}