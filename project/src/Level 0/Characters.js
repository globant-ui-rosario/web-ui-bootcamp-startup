import React, { Component } from 'react'
import Header from '../Level 1/Header'
import Content from '../Level 1/Content'
import Footer from '../Level 1/Footer'
import CharactersList from '../Level 2/CharactersList'
import querystring from 'query-string'
import './Characters.css'

export default class Characters extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      searchCharacters: '',
    }
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/characters';
    const params = {
        key: '$2a$10$UAdBgMAn4QwVG1Lmesy/IOcgM83yWR.5k9Q7rfUvSx/7vn58LmblK',
    }
    const qs = querystring.stringify(params);
    fetch(`${url}?${qs}`)
      .then(response => response.json())
      .then((result) => {
          this.setState({
              loading: true,
              characters: result
          });
      });
  }
  handleInputChange = (event) => {
    this.setState({searchCharacters: event.target.value})
  }

  render() {
    const { characters } = this.state
    const title = "characters"
    const charactersClassName = "characters"
    let filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(this.state.searchCharacters.toLowerCase())
    })

    return (
      <div className={`section-${charactersClassName}`}>
        <Header
          textTitle = {'Harry Potter API Project'} 
          onChange = {this.handleInputChange}
          section={title}
          buttonContainerClassName={`${charactersClassName}-buttoncontainer`}
          headerTextContentClassName={title}
        />
        <Content
          className={`${charactersClassName}-section`}
          content ={<CharactersList filteredCharacters={filteredCharacters}/>}
        />
        <Footer 
          className={`${charactersClassName}-footer`}
        />
      </div>
    );
  }
}