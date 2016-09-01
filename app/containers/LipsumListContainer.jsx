import React from 'react'
import List from '../components/List'
import Btn from '../components/Btn'
import ClipboardBtn from '../components/ClipboardBtn'
import randomWordParagraph from '../../libs/random_word_paragraph'

export default class LipsumListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listItems: []
    }
  }

  newLipsumBlock (data) {
    return randomWordParagraph(data)
  }

  addTextBlock () {
    this.setState({
      listItems: this.state.listItems.concat([this.newLipsumBlock(this.props.lipsumData)])
    })
  }

  componentDidMount () {
    this.setState({
      listItems: this.state.listItems.concat([this.newLipsumBlock(this.props.lipsumData)])
    })
  }

  render () {
    const newParagraph = ' \n\n'
    const textBlocks = this.state.listItems.join(newParagraph)

    return (
      <div>
        <ClipboardBtn clipboardText={textBlocks} />
        <List listItems={this.state.listItems} />
        <Btn label={"Add block"} handleClick={this.addTextBlock.bind(this)} />
      </div>
    )
  }
}

LipsumListContainer.propTypes = {
  lipsumData: React.PropTypes.array.isRequired
}
