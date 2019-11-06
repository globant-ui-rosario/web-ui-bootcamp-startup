import React, { Component } from 'react'
import Header from '../Level 1/Header'
import Content from '../Level 1/Content'
import Footer from '../Level 1/Footer'
import SpellsList from '../Level 2/SpellsList'
import querystring from 'query-string'
import './Spells.css'


export default class Spells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      searchSpells: '',
    }
  }

  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/spells';
    const params = {
        key: '$2a$10$UAdBgMAn4QwVG1Lmesy/IOcgM83yWR.5k9Q7rfUvSx/7vn58LmblK',
    }
    const qs = querystring.stringify(params);
    fetch(`${url}?${qs}`)
      .then(response => response.json())
      .then((result) => {
          this.setState({
              loading: true,
              spells: result
          });
      });
  }
  
  handleInputChange = (event) => {
    this.setState({searchSpells: event.target.value})
  }

  render() {
    const { spells, searchSpells } = this.state
    const title = "spells"
    const spellsClassName = "spells"
    let filteredSpells = spells.filter((elem) => {
      return elem.spell.toLowerCase().includes(searchSpells.toLowerCase())
    })

    return (
      <div className = {`section-${spellsClassName}`}>
        <Header 
          textTitle = {'Harry Potter API Project'}
          onChange={this.handleInputChange}
          section={title}
          buttonContainerClassName={`${spellsClassName}-buttoncontainer`}
          headerTextContentClassName={title}
        />
        <Content
          className={`${spellsClassName}-section`}
          content=
          {<SpellsList filteredSpells={filteredSpells}/>}
        />
        <Footer
          className={`${spellsClassName}-footer`}
        />
      </div>
    );
  }
}
