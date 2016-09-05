import React, { PropTypes } from 'react'
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

  setBtnLabel (count) {
    return count < 2 ? this.props.label : `Copy ${count} Paragraphs`
  }

  render () {
    const btnClasses = classnames('btn icon-text-btn clipboard-btn', {
      'copied': this.state.copied
    })

    return (
      <button className={btnClasses} data-clipboard-text={this.props.clipboardText} onClick={this.handleClick.bind(this)}><Icon icon={'octicon-clippy'} /> {this.setBtnLabel(this.props.paragraphCount)}</button>
    )
  }
}

ClipboardBtn.propTypes = {
  label: PropTypes.string,
  clipboardText: PropTypes.string.isRequired,
  paragraphCount: PropTypes.number
}

ClipboardBtn.defaultProps = {
  label: 'Copy to Clipboard',
  paragraphCount: 0
}
