import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <input className='search-bar' type='text' placeholder='Search...' onChange={this.props.inputChange} value={this.props.valueChange} style={{display: this.props.display}}></input>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
        {this.props.content}
      </section>
    );
  }
}

export {Content, SearchBar}

