import React from 'react'
import App from '../components/App'
import randomWordParagraph from '../../libs/random_word_paragraph'

export default class AppContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listItems: [],
      paragraphCount: 0
    }
  }

  newBlock () {
    return randomWordParagraph(this.props.sourceWords, this.props.minWords, this.props.maxWords)
  }
  resetBlocks () {
    this.setState({
      listItems: [this.newBlock()],
      paragraphCount: 1
    })
  }

  addTextBlock () {
    this.setState({
      listItems: this.state.listItems.concat([this.newBlock()]),
      paragraphCount: this.state.paragraphCount + 1
    })
  }

  componentDidMount () {
    this.addTextBlock()
  }

  render () {
    const textBlocks = this.state.listItems.join(' \n\n')

    return (
      <App {...this.props}
      listItems={this.state.listItems}
      paragraphCount={this.state.paragraphCount}
      textBlocks={textBlocks}
      addTextBlock={this.addTextBlock.bind(this)}
      resetBlocks={this.resetBlocks.bind(this)}
      />
    )
  }
}

AppContainer.propTypes = {
  staticContent: React.PropTypes.object,
  sourceWords: React.PropTypes.array,
  minWords: React.PropTypes.number,
  maxWords: React.PropTypes.number
}

AppContainer.defaultProps = {
  minWords: 25,
  maxWords: 30
}
