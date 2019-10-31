import React, {Component} from 'react'
import Header from './Header'
import {Content} from './Content'
import Footer from './Footer'
import TableTitle from './TableTitle'
import querystring from 'query-string'
import '../CSS/Spells.css'

class Spell extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: "spells-table-content"
    }
  }
  render() {
    const {className} = this.state
    return (
      <tr className={className}>
        <td className={className+'-name'}>{this.props.name}</td>
        <td className={className+'-type'}>{this.props.type}</td>
        <td className={className+'-effect'}>{this.props.effect}</td>
      </tr>
    );
  }
}

export default class Spells extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Spells section',
      title: 'spells',
      className: 'spells',
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
    const {spells} = this.state
    let filteredSpells = spells.filter((spell) => {
      return spell.spell.toLowerCase().includes(this.state.searchSpells.toLowerCase())
    })
    return (
      <div className='section-spells'>
        <Header 
          textTitle = {'Harry Potter API Project'}
          onChange={this.handleInputChange}
          section={this.state.title}
          buttonContainerClassName={this.state.className+'-buttoncontainer'}
        />
        <Content
          className={this.state.className+'-section'}
          content=
          {<SpellsList
            filteredSpells={filteredSpells}/>}
        />
        <Footer
          title={this.state.content + ' Footer'}
          className={this.state.className+'-footer'}
        />
      </div>
    );
  }
}

class SpellsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableTitleClassName: 'spells-table-title',
    }
  }
  render(){
    const {tableTitleClassName} = this.state
    let spells = this.props.filteredSpells.map((spell) => {
      return (
        <Spell
          name={spell.spell}
          type={spell.type}
          effect={spell.effect} 
        />
      );
    })
    return (
      <TableTitle
        section={'spells'}
        titles={
          <tr className={this.state.tableTitleClassName+'s'}>
            <th className={tableTitleClassName+'-name'}>Name</th>
            <th className={tableTitleClassName+'-type'}>Type</th>
            <th className={tableTitleClassName+'-effect'}>Effect</th>
          </tr>
        }
        content={spells}
      />
    );
  }
}
