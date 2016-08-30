import React from 'react'
import Header from './Header'
import TextBlock from './TextBlock'
import ClipboardBtn from './ClipboardBtn'
import staticText from '../data/staticText'
// import SRC_WORDS from './latin_words'

var SRC_WORDS = require('../../libs/latin_words')
var lipsum = require('../../libs/generate_lipsum')
var lipsumBlock = lipsum.randomWordParagraph(SRC_WORDS)

// console.log(lipsumBlock)

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="app-container">
        <Header title={staticText.appInfo.title} />
        <ClipboardBtn clipboardText={lipsumBlock} />
        <TextBlock id={'testTarget'} text={lipsumBlock} />
      </div>
    );
  }
}
