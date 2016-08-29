import React from 'react'
import Header from './Header'
import staticContent from '../data/static'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
        <Header title={staticContent.appInfo.title} />
      </div>
    );
  }
}
