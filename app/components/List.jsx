import React from 'react'

const List = props => <ul className={props.style}>{props.listItems.map((item, key) => <li key={key}>{item}</li>)}</ul>

export default List

List.propTypes = {
  listItems: React.PropTypes.array.isRequired,
  style: React.PropTypes.string
}

List.defaultProps = {
  style: 'list-no-bullets'
}
