import React from 'react'
import App from '../components/App'
import randomWordParagraph from '../../libs/random_word_paragraph'

export default class AppContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textBlocks: []
    }
    this.addTextBlock.bind(this)
  }

  addTextBlock () {
    const newBlock = randomWordParagraph(this.props.sourceWords)
    this.setState({
      listItems: this.state.listItems.concat([newBlock])
    })
  }

  componentDidMount () {
    this.addTextBlock()
  }

  render () {
    // const newParagraph = ' \n\n'
    // const textBlocks = this.state.listItems.join(newParagraph)

    return (
      <App {...this.props} textBlocks={this.state.textBlocks} />
    )
  }
}

AppContainer.propTypes = {
  staticContent: React.PropTypes.object,
  sourceWords: React.PropTypes.array
}

// <div>
//   <ClipboardBtn clipboardText={textBlocks} />
//   <List listItems={this.state.listItems} />
//   <Btn label={"Add block"} handleClick={this.addTextBlock.bind(this)} />
// </div>
