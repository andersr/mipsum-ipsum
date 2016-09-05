import React from 'react'
import App from '../components/App'
// import { connect } from 'react-redux'
import randomWordParagraph from '../../libs/random_word_paragraph'

export default class AppContainer extends React.Component {
  constructor (props) {
    super(props)
    //  Use redux here instead
    this.state = {
      listItems: [],
      paragraphCount: 0
    }
  }

  addTextBlock () {
    const newBlock = randomWordParagraph(this.props.sourceWords)

    // Dispatch this to a redux action or reducer

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

    // console.log('textBlocks', textBlocks)

    return (
    <App {...this.props} listItems={this.state.listItems} paragraphCount={this.state.paragraphCount} textBlocks={textBlocks}
    addTextBlock={this.addTextBlock.bind(this)} />
    )
  }
}

AppContainer.propTypes = {
  staticContent: React.PropTypes.object,
  sourceWords: React.PropTypes.array
}
