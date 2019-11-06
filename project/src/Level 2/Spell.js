import React, { Component } from 'react'

export default class Spell extends Component {
  render() {
    const spellTableContent = "spells-table-content"
    const {
      name,
      type,
      effect,
    } = this.props

    return (
      <tr className={spellTableContent}>
        <td className={`${spellTableContent}-name`}>{name}</td>
        <td className={`${spellTableContent}-type`}>{type}</td>
        <td className={`${spellTableContent}-effect`}>{effect}</td>
      </tr>
    );
  }
}