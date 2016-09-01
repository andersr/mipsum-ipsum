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
      listItems: []
    }
    this.sourceWords = LATIN_WORDS
  }

  addTextBlock () {
    const newBlock = randomWordParagraph(this.sourceWords)
    this.setState({
      listItems: this.state.listItems.concat([newBlock])
    })
  }

  componentDidMount () {
    const defaultBlock = randomWordParagraph(this.sourceWords)
    this.setState({
      listItems: this.state.listItems.concat([defaultBlock]),
      listContent: defaultBlock
    })
  }

  render () {
    const mergedTextBlocks = this.state.listItems.join(' \n\n')

    return (
      <div>
        <ClipboardBtn clipboardText={mergedTextBlocks} />
        <List listItems={this.state.listItems} />
        <Btn label={"Add block"} handleClick={this.addTextBlock.bind(this)} />
      </div>
    )
  }
}
