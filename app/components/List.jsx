import React from 'react'

const List = props => <ul>{props.listItems.map((item, key) => <li key={key}>{item}</li>)}</ul>

export default List

List.propTypes = {
  listItems: React.PropTypes.array.isRequired
}
