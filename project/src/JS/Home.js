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
import {Link, animateScroll as scroll} from 'react-scroll';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: 'home',
    }
  }
  render() {
    return (
      <div className='section-home'>
        <Header
          section={this.state.className}
          displaySearchBar = {'none'}
          buttonContainerClassName={this.state.className+'-buttoncontainer'}
        />
        <div>
          <Content 
            content= {
              <div className='home-sections'>
                <NameOfHouse title='Gryffindor' shield={GryffindorShield}/>
                <NameOfHouse title='Slytherin' shield={SlytherinShield}/>
                <NameOfHouse title='Ravenclaw' shield={RavenclawShield}/>
                <NameOfHouse title='Hufflepuff' shield={HufflepuffShield}/>
              </div>
            }
          />
        </div>
        <Footer
          title={this.state.content + ' Footer'}
          className={this.state.className+'-footer'} />
      </div>
    );
  }
}

class NameOfHouse extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
  }
  render() {
    const {title} = this.state
    return (
      <div className={'home-'+title.toLowerCase()+'-section'}>
          <Link
            activeClass="active"
            spy={true}
            to={this.state.title.toLowerCase()+'-section'}
            smooth={true}
            offset={-10}
            duration={500}>
          <Shield
            className={this.state.title.toLowerCase()+'-shield'}
            source={this.props.shield}
            alt={this.state.title+' Shield'}
            width={'199'}
            height={'239'}/>
          </Link>
          <House
            className={this.state.title.toLowerCase()+'-section'}
            houseName={title}
            id={this.state.title.toLowerCase()+'-section'}
          />
      </div>
    );
  }
}

class Shield extends Component {
  render(){
    return (
      <div className='shield' style={{textAlign: 'center'}}>
        <img
          width={this.props.width}
          height={this.props.height}
          src={this.props.source}
          style={{borderRadius: '100px', marginTop: '20px'}}
          alt={this.props.alt}>  
        </img>
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
      <div className='home-info' id={this.props.id}>
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
      <div style={{width: '300px', height: 'auto', marginBottom: '30px'}} className={this.props.classNameContainer}>
        <div className={this.state.title+'-'+this.props.classNameTitle}><span>{this.props.title}</span>{this.props.content}</div>
      </div>
    );
  }
}
