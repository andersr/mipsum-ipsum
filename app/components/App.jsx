import React from 'react'
import Header from './Header'
import TextBlock from './TextBlock'
import ClipboardBtn from './ClipboardBtn'
import randomWordParagraph from '../../libs/random_word_paragraph'
import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'

const textBlock = randomWordParagraph(LATIN_WORDS)

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div id="app-container">
        <Header title={STATIC_TEXT.appInfo.title} />
        <ClipboardBtn clipboardText={textBlock} />
        <TextBlock id={'testTarget'} text={textBlock} />
      </div>
    );
  }
}
