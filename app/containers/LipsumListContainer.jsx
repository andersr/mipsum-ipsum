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
    this.newBlock = data => randomWordParagraph(data)
  }

  addTextBlock () {
    this.setState({
      listItems: this.state.listItems.concat([this.newBlock(this.props.lipsumData)])
    })
  }

  componentDidMount () {
    this.setState({
      listItems: this.state.listItems.concat([this.newBlock(this.props.lipsumData)])
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

LipsumListContainer.propTypes = {
  lipsumData: React.PropTypes.array.isRequired
}
