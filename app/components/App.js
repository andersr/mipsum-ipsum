import React from 'react'
import Other from './OtherComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Foo Test Bar React test foo
        <Other />
      </div>
    );
  }
}


// export default () => (
//   <div>
//   test foo
//   </div>
// )
