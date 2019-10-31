import React, {Component} from 'react'
import Header from './Header'
import {Content} from './Content';
import Footer from './Footer'
import TableTitle from './TableTitle';
import querystring from 'query-string';
import '../CSS/Characters.css';

class Character extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: "characters-table-content"
    }
  }
  render() {
    const {className} = this.state
    return (
      <tr className={className}>
        <td className={className+'-name'}>{this.props.name}</td>
        <td className={className+'-species'}>{this.props.species}</td>
        <td className={className+'-house'}>{this.props.house}</td>
        <td className={className+'-role'}>{this.props.role}</td>
        <td className={className+'-blood'}>{this.props.bloodStatus}</td>
      </tr>
    );
  }
}

class CharactersList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableTitleClassName: 'characters-table-title'
    }
  }
  render() {
    const {tableTitleClassName} = this.state
    let characters = this.props.filteredCharacters.map((character) => {
      if (character.house === undefined && character.role === undefined){
        return (
          <Character
            name={character.name}
            species={character.species.slice(0, 1).toUpperCase() + character.species.slice(1, character.species.lenght)}
            bloodStatus={character.bloodStatus} 
            house={'unknown'}
            role={'unknown'}
          />
        );
      }
      if (character.role === undefined || character.role === 'unknown'){
        return (
          <Character 
            name={character.name}
            species={character.species.slice(0, 1).toUpperCase() + character.species.slice(1, character.species.lenght)}
            bloodStatus={character.bloodStatus} 
            house={character.house}
            role={'unknown'}
          />
        );
      }
      if (character.house === undefined || character.role === 'unknown'){
        return (
          <Character 
            name={character.name}
            species={character.species.slice(0, 1).toUpperCase() + character.species.slice(1, character.species.lenght)}
            bloodStatus={character.bloodStatus} 
            house={'unknown'}
            role={character.role}
          />
        );
      }
      else {
        return (
          <Character
            name={character.name}
            species={character.species.slice(0, 1).toUpperCase() + character.species.slice(1, character.species.lenght)}
            bloodStatus={character.bloodStatus} 
            house={character.house}
            role={character.role.slice(0, 1).toUpperCase() + character.role.slice(1, character.role.lenght)}
          />
        );
      }
    })
    return (
      <div>
        <TableTitle
          section={'characters'}
          titles={
            <tr className={this.state.tableTitleClassName+'s'}>
              <th className={tableTitleClassName+'-name'}>Name</th>
              <th className={tableTitleClassName+'-type'}>Type</th>
              <th className={tableTitleClassName+'-house'}>House</th>
              <th className={tableTitleClassName+'-role'}>Role</th>
              <th className={tableTitleClassName+'-blood'}>Blood</th>
            </tr>
          } 
          content= {characters}
        />
      </div>
    );
  }
}

export default class Characters extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      characters: [],
      className: 'characters',
      title: 'characters',
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
    const {characters} = this.state
    let filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(this.state.searchCharacters.toLowerCase())
    })
    return (
      <div className={this.state.className+'-section'}>
        <Header
          textTitle={'Harry Potter API Project'} 
          onChange = {this.handleInputChange}
          section={this.state.title}
          buttonContainerClassName={this.state.className+'-buttoncontainer'}
        />
        <Content
          className={this.state.className+'-section'}
          content =
          {<CharactersList
            filteredCharacters={filteredCharacters}/>}
        />
        <Footer 
          className={this.state.className+'-footer'}
          title={this.state.content + ' Footer'}
        />
      </div>
    );
  }
}