import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*
  I've created three components: Header, ButtonContainer and Button
  The Header component will contain the other two because that components will live inside Header
  along the program, and i've decided to put them together in the same file because of that too.
*/

export default class Header extends Component{
  render() {
    return (
      <header className='header'>
        {this.props.title}
        <ButtonContainer/>
      </header>
    );
  }
}

class ButtonContainer extends Component {
  render() {
    return (
      <div className='header-button-container'>
        <Button title='Home'/>
        <Button title='Characters'/>
        <Button title='Spells'/>
        <Button title='Info'/>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div className={this.props.title.toLowerCase()+'-button'}>
        <Link 
          style={{textDecoration: 'none', color: 'white', position: 'absolute', top: '25%'}}
          className={this.props.title.toLowerCase()+'-textcontent'}
          to={'/'+this.props.title.toLowerCase()}>{this.props.title}
        </Link>
      </div>
    );
  }
}
