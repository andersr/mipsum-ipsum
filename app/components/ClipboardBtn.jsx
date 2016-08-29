import React from 'react'
import Clipboard from 'clipboard'
import classnames from 'classnames'

export default class ClipboardBtn extends React.Component {

  constructor(props) {
    super(props);
    const clipboard = new Clipboard('.clipboard-btn')
    this.state = {
      copied: false
    }
  }

  handleClick (e) {
    this.setState({ copied: true })

    setTimeout(() => {
      this.setState({ copied: false })
    }, 1500)

  }
  render() {
    const btnClasses = classnames('clipboard-btn', {
       'copied': this.state.copied
    })

    return (
      <button className={btnClasses} data-clipboard-text={this.props.clipboardText} onClick={this.handleClick.bind(this)}>{this.props.label}</button>
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
