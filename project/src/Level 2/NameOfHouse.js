import React, { Component } from 'react'
import Shield from './Shield'
import House from '../Level 3/House'
import { Link, animateScroll as scroll } from 'react-scroll';

export default class NameOfHouse extends Component {
  render() {
    const { shield, displayContent, onClickShield, scrolled, title } = this.props

    return (
      <div className={`home-${title.toLowerCase()}-section`}>
        <Link
          activeClass="active"
          spy={true}
          to={`${title.toLowerCase()}-section`}
          smooth={true}
          offset={180}
          duration={800}>
        <Shield
          shieldClassName={`${title.toLowerCase()}-shield`}
          source={shield}
          alt={`${title} Shield`}
          width={'199'}
          height={'239'}
          onClickShield={onClickShield}
        />
        </Link>
        <House
          houseName={title}
          id={`${title.toLowerCase()}-section`}
          displayContent={displayContent}
          scrolled={scrolled}
          houseClassName={`home-${title.toLowerCase()}-info`}
        />
      </div>
    );
  }
}