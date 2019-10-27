import React, {Component} from 'react';
import Header from './Header';
import {Content} from './Content';
import Footer from './Footer';
import querystring from 'query-string';
import './Home.css'
import GryffindorShield from './Gryffindor.png'
import SlytherinShield from './Slytherin.jpg'
import HufflepuffShield from './Hufflepuff.jpg'
import RavenclawShield from './Ravenclaw.jpg'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Home section'
    }
  }
  render() {
    return (
      <div className='section-home'>
        <Header 
          title={this.state.content + ' Header'}
          displaySearchBar = {'none'}
        />
        <div>
          <Content 
            content= {
              <div className='home-sections'>
                <Gryffindor/>
                <Slytherin/>
                <Ravenclaw/>
                <Hufflepuff/>
              </div>
            }
          />
        </div>
        <Footer
          title={this.state.content + ' Footer'} />
      </div>
    );
  }
}

class Gryffindor extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Gryffindor'
    }
  }
  render() {
    const {title} = this.state
    return (
      <div className={'home-'+title.toLowerCase()+'-section'}>
          <Shield
          source={GryffindorShield}
          alt={this.state.title+' Shield'}
          width={'199'}
          height={'239'}/>
        <House 
          houseName={title}/>
      </div>
    );
  }
}

class Slytherin extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Slytherin'
    }
  }
  render() {
    const {title} = this.state
    return (
      <div className={'home-'+title.toLowerCase()+'-section'}>
        <Shield 
          source={SlytherinShield}
          alt={this.state.title+' Shield'}
        />
        <House
          houseName={title}/>
      </div>
    );
  }
}

class Ravenclaw extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Ravenclaw'
    }
  }
  render() {
    const {title} = this.state
    return (
      <div className={'home-'+title.toLowerCase()+'-section'}>
        <Shield
          source={RavenclawShield}
          alt={this.state.title+' Shield'}
        />
        <House
          houseName={title}
        />
      </div>
    );
  }
}

class Hufflepuff extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Hufflepuff'
    }
  }
  render() {
    const {title} = this.state
    return (
      <div className={'home-'+title.toLowerCase()+'-section'}>
        <Shield 
          source={HufflepuffShield}
          alt={this.state.title+' Shield'}
        />
        <House 
          houseName={title}
        />
      </div>
    );
  }
}

class Shield extends Component {
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <img width={this.props.width} height={this.props.height} src={this.props.source} style={{borderRadius: '100px', marginTop: '20px'}} alt={this.props.alt}></img>
      </div>
    );
  }
}

class House extends Component {
  constructor(props){
    super(props);
    this.state = {
      houses: [],
    }
  }
  componentDidMount() {
    const url = 'https://www.potterapi.com/v1/houses';
    const params = {
        key: '$2a$10$UAdBgMAn4QwVG1Lmesy/IOcgM83yWR.5k9Q7rfUvSx/7vn58LmblK',
    }
    const qs = querystring.stringify(params);
    fetch(`${url}?${qs}`)
      .then(response => response.json())
      .then((result) => {
          this.setState({
              loading: true,
              houses: result
          });
      });
  }
  render() {
    const {houses} = this.state
    const {houseName} = this.props
    return (
      <div>
      {houses.map((house) => {
        if (house.name === houseName){
          return (
            <div>
              <ul>
                <h2><span style={{textDecoration: 'underline'}}>House:</span>{' '+house.name}</h2>
                <h3><span style={{textDecoration: 'underline'}}>Founder:</span>{' '+house.founder}</h3>
                <h3><span style={{textDecoration: 'underline'}}>Mascot:</span> {' '+house.mascot.slice(0, 1).toUpperCase()+house.mascot.slice(1, 10)}</h3>
                <h3><span style={{textDecoration: 'underline'}}>House Ghost:</span>{' '+house.houseGhost}</h3>
                <h3><span style={{textDecoration: 'underline'}}>Head of House:</span>{' '+house.headOfHouse}</h3>
                <h3><span style={{textDecoration: 'underline'}}>Values of the house:</span>
                  {house.values.map((value) => {
                    return (
                      <div>{value}</div>
                    );
                  })}
                </h3>
                <h3><span style={{textDecoration: 'underline'}}>Colors:</span>
                  {house.colors.map((color)=> {
                    return (
                      <div>{color}</div>
                    );
                  })}
                </h3>
              </ul>
            </div>
          );
        }
      })}
      </div>
    );
  }
}

