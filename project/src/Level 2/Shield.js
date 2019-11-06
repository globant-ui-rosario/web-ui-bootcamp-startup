import React, { Component } from 'react'

export default class Shield extends Component {
  render(){
    const {
      width,
      height,
      source,
      alt,
      onClickShield,
      shieldClassName,
    } = this.props
    return (
      <div className={shieldClassName} style={{textAlign: "center"}} onClick={onClickShield}>
        <img
          className={`${shieldClassName}-img`}
          width={width}
          height={height}
          src={source}
          alt={alt}>  
        </img>
      </div>
    );
  }
}