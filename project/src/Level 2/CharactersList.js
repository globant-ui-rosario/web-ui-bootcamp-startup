import React, { Component } from 'react'
import TableTitle from './TableTitle'
import Character from './Character'

export default class CharactersList extends Component {
  render() {
    const tableTitleClassName  = "characters-table-title"
    let characters = this.props.filteredCharacters.map((character) => {
      if (character.house === undefined ||
          character.role === undefined  || 
          character.house === 'unknown' ||
          character.role === 'unknown'){
          character.house = 'unknown'
          character.role = 'unknown'}
      return (
        <Character
          name={character.name}
          species={character.species.slice(0, 1).toUpperCase() + character.species.slice(1, character.species.lenght)}
          bloodStatus={character.bloodStatus} 
          house={character.house}
          role={character.role.slice(0, 1).toUpperCase() + character.role.slice(1, character.role.lenght)}
        />
      );
    })
    return (
      <div>
        <TableTitle
          tableClassName={tableTitleClassName}
          titles = {
            <tr className={`${tableTitleClassName}s`}>
              <th className={`${tableTitleClassName}-name`}>Name</th>
              <th className={`${tableTitleClassName}-type`}>Type</th>
              <th className={`${tableTitleClassName}-house`}>House</th>
              <th className={`${tableTitleClassName}-role`}>Role</th>
              <th className={`${tableTitleClassName}-blood`}>Blood</th>
            </tr>
          } 
          content = { characters }
        />
      </div>
    );
  }
}