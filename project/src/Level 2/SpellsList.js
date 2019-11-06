import React, { Component } from 'react'
import Spell from './Spell'
import TableTitle from './TableTitle'

export default class SpellsList extends Component {
  render() {
    const { filteredSpells } = this.props
    const tableTitleClassName = "spells-table-title"
    let spells = filteredSpells.map((spell) => {
      return (
        <Spell
          name={spell.spell}
          type={spell.type}
          effect={spell.effect} 
        />
      );
    })

    return (
      <TableTitle
        tableClassName={tableTitleClassName}
        titles = {
          <tr className={`${tableTitleClassName}s`}>
            <th className={`${tableTitleClassName}-name`}>Name</th>
            <th className={`${tableTitleClassName}-type`}>Type</th>
            <th className={`${tableTitleClassName}-effect`}>Effect</th>
          </tr>
        }
        content = { spells }
      />
    );
  }
}