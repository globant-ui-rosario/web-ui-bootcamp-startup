import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <input id='search-bar' type='text' placeholder='Search...' onChange={this.props.inputChange} value={this.props.valueChange} style={{display: this.props.display}}></input>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section style={{display: this.props.displayContent}} className={this.props.className}>
        {this.props.content}
      </section>
    );
  }
}

export {Content, SearchBar}

