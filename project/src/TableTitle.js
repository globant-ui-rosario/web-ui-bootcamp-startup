import React, {Component} from 'react'

export default class TableTitle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <table className={this.props.section+"-table"}>
        {this.props.titles}
        <tbody>
          {this.props.content}
        </tbody>
      </table>
    );
  }
}