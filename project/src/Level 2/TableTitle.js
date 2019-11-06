import React, {Component} from 'react'

export default class TableTitle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {
      tableClassName,
      titles,
      content
    } = this.props
    return (
      <table className={tableClassName}>
        {titles}
        <tbody>
          {content}
        </tbody>
      </table>
    );
  }
}