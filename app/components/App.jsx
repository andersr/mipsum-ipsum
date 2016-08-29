import React from 'react'
import Header from './Header'
import TextBlock from './TextBlock'
import staticText from '../data/staticText'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
        <Header title={staticText.appInfo.title} />
        <TextBlock text={staticText.lipsumText.paragraphBlock} />
      </div>
    );
  }
}
