import React from 'react'
import App from '../components/App'
// import { connect } from 'react-redux'
import randomWordParagraph from '../../libs/random_word_paragraph'

export default class AppContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listItems: [],
      paragraphCount: 0
    }
  }

  resetBlocks () {
    const newBlock = randomWordParagraph(this.props.sourceWords)
    this.setState({
      listItems: [newBlock],
      paragraphCount: 1
    })
  }

  addTextBlock () {
    const newBlock = randomWordParagraph(this.props.sourceWords)
    this.setState({
      listItems: this.state.listItems.concat([newBlock]),
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
  sourceWords: React.PropTypes.array
}
