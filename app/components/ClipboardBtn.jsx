import React, { PropTypes } from 'react'
import Clipboard from 'clipboard'
import classnames from 'classnames'
import Icon from './Icon'
import Paragraph from './Paragraph'
import selectText from '../../libs/select_text'

export default class ClipboardBtn extends React.Component {
  constructor (props) {
    super(props)
    this.clipboard = new Clipboard('.clipboard-btn')

    this.state = {
      copied: false,
      copyManually: false
    }
    const self = this
    this.clipboard.on('success', (e) => {
      self.setState({ copied: true })
      setTimeout(() => {
        self.setState({ copied: false })
      }, 1500)
      e.clearSelection()
    })

    this.clipboard.on('error', (e) => {
      // console.log('copy manually')
      // e.clearSelection()
      self.setState({ copyManually: true })
      setTimeout(() => {
        self.setState({ copyManually: false })
      }, 6000)
      selectText('lipsumBlocks')
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
    const copyManuallyMsg = "Please copy text manually"
    const copyManuallyAlert = <Paragraph text={copyManuallyMsg} />
    const btnClasses = classnames('btn icon-text-btn clipboard-btn', {
      'copied': this.state.copied, 'copy-manually': this.state.copyManually
    })

    return (
      <div>
      <button className={btnClasses} onClick={this.handleClick.bind(this)} data-clipboard-text={this.props.clipboardText}><Icon icon={'octicon-clippy'} /> {this.setBtnLabel(this.props.paragraphCount)}</button>
      {this.state.copyManually ? copyManuallyAlert : null}
      </div>
    )
  }
}

//   <form onSubmit={this.handleClick.bind(this)}> data-clipboard-text={this.props.clipboardText}       </form>

ClipboardBtn.propTypes = {
  label: PropTypes.string,
  clipboardText: PropTypes.string.isRequired,
  paragraphCount: PropTypes.number
}

ClipboardBtn.defaultProps = {
  label: 'Copy to Clipboard',
  paragraphCount: 0
}
