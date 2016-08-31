import React from 'react'
import List from '../components/List'
import Btn from '../components/Btn'
import ClipboardBtn from '../components/ClipboardBtn'
import randomWordParagraph from '../../libs/random_word_paragraph'
import LATIN_WORDS from '../../libs/latin_words'

export default class ListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      listItems: [],
      listContent: ''
    }
  }

  addTextBlock () {
    // add new textBlock
    const newBlock = randomWordParagraph(LATIN_WORDS)
    this.setState({
      listItems: this.state.listItems.concat([newBlock])
    }, this.mergeTextBlocks())
  }

  mergeTextBlocks () {
    const mergedTextBlocks = this.state.listItems.join(' \n\n')

    this.setState({
      listContent: mergedTextBlocks
    })
  }

  componentDidMount () {
    const defaultBlock = randomWordParagraph(LATIN_WORDS)
    this.setState({
      listItems: this.state.listItems.concat([defaultBlock]),
      listContent: defaultBlock
    })
  }

  render () {
    return (
      <div>
        <ClipboardBtn clipboardText={this.state.listContent} />
        <List listItems={this.state.listItems} />
        <Btn label={"Add block"} handleClick={this.addTextBlock.bind(this)} />
      </div>
    )
  }
}
