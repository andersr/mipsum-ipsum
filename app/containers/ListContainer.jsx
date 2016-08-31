import React from 'react'
import List from '../components/List'
// import TextBlock from './TextBlock'
// import ClipboardBtn from './ClipboardBtn'
import randomWordParagraph from '../../libs/random_word_paragraph'
// import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'



export default class ListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      listItems: []
    }
  }
  componentDidMount () {
    const defaultBlock = [randomWordParagraph(LATIN_WORDS)]
    // console.log('test ', test)
    this.setState({
      listItems: this.state.listItems.concat(defaultBlock)
    })
  }

  render () {
    console.log('list items: ', this.state.listItems)
    return <List listItems={this.state.listItems} />
  }
}
