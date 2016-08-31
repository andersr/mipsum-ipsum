import React from 'react'
import List from '../components/List'
import ClipboardBtn from '../components/ClipboardBtn'
// import TextBlock from './TextBlock'
// import ClipboardBtn from './ClipboardBtn'
import randomWordParagraph from '../../libs/random_word_paragraph'
// import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'



export default class ListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      listItems: [],
      listContent: ''
    }
  }

  // mergeTextBlocks () {
  //   const mergedTextBlocks = this.state.listItems.join(' ')
  //
  //   this.setState({
  //     listContent: mergedTextBlocks
  //   })
  // }
  componentDidMount () {
    const defaultBlock = randomWordParagraph(LATIN_WORDS)
    this.setState({
      listItems: this.state.listItems.concat([defaultBlock]),
      listContent: defaultBlock
    })
  }

  render () {
    // console.log('list items: ', this.state.listItems)
    return (
      <div>
        <ClipboardBtn clipboardText={this.state.listContent} />
        <List listItems={this.state.listItems} />
      </div>
    )
  }
}
