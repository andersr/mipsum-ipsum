import React, { PropTypes } from 'react'
import classnames from 'classnames'

const List = ({ listItems, style }) => (
  <ul className={classnames('list', style)}>
    {
      listItems.map((item, key) => (
        <li key={key}>{item}</li>)
      )
    }
  </ul>
)

export default List

List.propTypes = {
  listItems: PropTypes.array.isRequired,
  style: PropTypes.string
}

List.defaultProps = {
  style: 'list-no-bullets'
}
