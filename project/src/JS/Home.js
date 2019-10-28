import React, {Component} from 'react';
import Header from './Header';
import {Content} from './Content';
import Footer from './Footer';
import querystring from 'query-string';
import '../CSS/Home.css'
import GryffindorShield from '../LOGOS/Gryffindor.png'
import SlytherinShield from '../LOGOS/Slytherin.jpg'
import HufflepuffShield from '../LOGOS/Hufflepuff.jpg'
import RavenclawShield from '../LOGOS/Ravenclaw.jpg'

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
      title: 'House'
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
              <ul className={this.state.title.toLowerCase()+'-titles'}>
                <HouseContent
                  classNameTitle={'-house'}
                  title={'House:'}
                  content={' '+house.name}
                />
                <HouseContent
                  classNameTitle={'-founder'}
                  title={'Founder:'}
                  content={' '+house.founder}
                />
                <HouseContent
                  classNameTitle={'-mascot'}
                  title={'Mascot:'}
                  content={' '+house.mascot.slice(0, 1).toUpperCase()+house.mascot.slice(1, 10)}
                />
                <HouseContent
                  classNameTitle={'-houseghost'}
                  title={'Ghost:'}
                  content={' '+house.houseGhost}
                />
                <HouseContent
                  classNameTitle={'-headofhouse'}
                  title={'Head:'}
                  content={' '+house.headOfHouse}
                />
                <HouseContent
                  classNameTitle={'-values'}
                  title={'Values:'}
                  content=
                  {house.values.map((value) => {
                    return (
                      <div>{value}</div>
                    );
                  })}/>
                <HouseContent 
                  classNameTitle={'-colors'}
                  title={'Colors:'}
                  content=
                  {house.colors.map((color)=> {
                    return (
                      <div>{color}</div>
                    );
                  })}/>
              </ul>
            </div>
          );
        }
      })}
      </div>
    );
  }
}

class HouseContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'house-content'
    }
  }
  render() {
    return (
      <div style={{width: '300px', height: 'auto'}} className={this.props.classNameContainer}>
        <h3 className={this.state.title+'-'+this.props.classNameTitle}><span style={{textDecoration: 'underline'}}>{this.props.title}</span>{this.props.content}</h3>
      </div>
    );
  }
}
