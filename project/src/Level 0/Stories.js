import React, { Component } from 'react'
import Header from '../Level 1/Header'
import Content from '../Level 1/Content'
import Footer from '../Level 1/Footer'
import StoriesContainer from '../Level 2/StoriesContainer'
import './Stories.css'

export default class Stories extends Component {
  constructor(props){
    super(props);
    this.state = {
      button: 'Show'
    }
  }

  render() {
    const storiesClassName = "stories"
    const title = "stories"
    return (
      <div className={`section-${storiesClassName}`}>
        <Header
          displaySearchBar = {'none'}
          section={title}
          buttonContainerClassName={`${storiesClassName}-buttoncontainer`}
          headerTextContentClassName={title}
        />
        <Content
          className={`${title}-section`}
          content={
            <div>
              <StoriesContainer
                number={1}
                title={title}
                className={title}
              />
              <StoriesContainer
                number={2}
                title={title}
                className={title}
              />
              <StoriesContainer
                number={3}
                title={title}
                className={title}
              />
            </div>
          }
        />
        <Footer
          className={`${storiesClassName}-footer`}
        />
      </div>
    );
  }
}