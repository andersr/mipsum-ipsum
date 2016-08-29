import React from 'react'
import Header from './Header'
import TextBlock from './TextBlock'
import ClipboardBtn from './ClipboardBtn'
import staticText from '../data/staticText'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="app-container">
        <Header title={staticText.appInfo.title} />
        <ClipboardBtn clipboardText={staticText.lipsumText.paragraphBlock} />
        <TextBlock id={'testTarget'} text={staticText.lipsumText.paragraphBlock} />
      </div>
    );
  }
}
