import React from 'react'

class Board extends React.Component {
  constructor() {
    super()
    this.blank = "\u00A0"
  }
  async handleClick(id) {
    if (this.props.board[id] === "\u00A0") {
    await this.props.upBoard(id)
    this.props.checkWin()
    this.props.onChange()
  }
}


  render() {
    return (
      <div id='board'>
          <button id="zero" onClick={() => this.handleClick(0)}>{this.props.board[0]}</button>
          <button id="one" onClick={() => this.handleClick(1)}>{this.props.board[1]}</button>
          <button id="two" onClick={() => this.handleClick(2)}>{this.props.board[2]}</button>
          <button id="three" onClick={() => this.handleClick(3)}>{this.props.board[3]}</button>
          <button id="four" onClick={() => this.handleClick(4)}>{this.props.board[4]}</button>
          <button id="five" onClick={() => this.handleClick(5)}>{this.props.board[5]}</button>
          <button id="six" onClick={() => this.handleClick(6)}>{this.props.board[6]}</button>
          <button id="seven" onClick={() => this.handleClick(7)}>{this.props.board[7]}</button>
          <button id="eight" onClick={() => this.handleClick(8)}>{this.props.board[8]}</button>
      </div>)
  }
}

export default Board
