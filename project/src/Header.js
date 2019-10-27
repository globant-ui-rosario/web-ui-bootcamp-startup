import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SearchBar} from './Content';

/*
  The ButtonContainerMobile component will show up and the ButtonContainer component
  will be hidden when the window size were 700px.
  I've also create another Button component for this case because has different styles.
*/

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Harry Potter API Project'
    }
  }
  render() {
    return (
      <header className='header'>
        <div className='header-mobile-container'>
          <h1 className={this.props.title.toLowerCase()+'-textcontent'}>
          {this.state.title}
          </h1>
          <ButtonContainerMobile/>
        </div>
        <ButtonContainer
          inputChange = {this.props.onChange}
          valueChange = {this.props.onValue}
          display = {this.props.displaySearchBar}
        />
      </header>
    );
  }
}

class ButtonContainer extends Component {
  render() {
    return (
      <div className='header-button-container'>
        <Button title='Home'/>
        <Button title='Chars'/>
        <Button title='Spells'/>
        <Button title='Info'/>
        <SearchBar
          inputChange = {this.props.inputChange}
          valueChange = {this.props.valueChange}
          display = {this.props.display}
        />
      </div>
    );
  }
}


class ButtonContainerMobile extends Component {
  render() {
    return (
      <div className='header-button-container-mobile'>
        <ButtonM title='Home'/>
        <ButtonM title='Chars'/>
        <ButtonM title='Spells'/>
        <ButtonM title='Info'/>
      </div>
    )
  }
}

class Button extends Component {
  render() {
    return (
      <div className={this.props.title.toLowerCase()+'-button'}>
        <Link 
          style={{textDecoration: 'none', color: 'white', position: 'absolute', top: '25%'}}
          className={this.props.title.toLowerCase()+'-button-textcontent'}
          to={'/'+this.props.title.toLowerCase()}>{this.props.title}
        </Link>
      </div>
    );
  }
}

class ButtonM extends Component {
  render() {
    return (
      <div className={this.props.title.toLowerCase()+'-button-mobile'}>
        <Link 
          style={{textDecoration: 'none', color: 'white'}}
          className={this.props.title.toLowerCase()+'-button-mobile-textcontent'}
          to={'/'+this.props.title.toLowerCase()}>{this.props.title}
        </Link>
      </div>
    );
  }
}
