import React, { Component } from 'react'

export default class Character extends Component {
  render() {
    const charTableContent = "characters-table-content"
    const {
      name,
      species,
      house,
      role,
      bloodStatus
    } = this.props
    
    return (
      <tr className={charTableContent}>
        <td className={`${charTableContent}-name`}>{name}</td>
        <td className={`${charTableContent}-species`}>{species}</td>
        <td className={`${charTableContent}-house`}>{house}</td>
        <td className={`${charTableContent}-role`}>{role}</td>
        <td className={`${charTableContent}-blood`}>{bloodStatus}</td>
      </tr>
    );
  }
}