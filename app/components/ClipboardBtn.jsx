import React from 'react'
import Clipboard from 'clipboard'
import classnames from 'classnames'
import Icon from './Icon'

export default class ClipboardBtn extends React.Component {
  constructor (props) {
    super(props)
    this.clipboard = new Clipboard('.clipboard-btn')
    this.state = {
      copied: false
    }
    const self = this
    this.clipboard.on('success', (e) => {
      e.clearSelection()
      self.setState({ copied: true })
      setTimeout(() => {
        self.setState({ copied: false })
      }, 1500)
    })
  }

  componentWillUnmount () {
    this.clipboard.destroy()
  }

  handleClick (e) {
    e.preventDefault()
  }

  render () {
    const btnClasses = classnames('btn icon-text-btn clipboard-btn', {
      'copied': this.state.copied
    })

    return (
      <button className={btnClasses} data-clipboard-text={this.props.clipboardText} onClick={this.handleClick.bind(this)}><Icon icon={'octicon-clippy'} /> {this.props.label}</button>
    )
  }
}

ClipboardBtn.propTypes = {
  label: React.PropTypes.string,
  clipboardText: React.PropTypes.string.isRequired
}

ClipboardBtn.defaultProps = {
  label: 'Copy to Clipboard'
}
