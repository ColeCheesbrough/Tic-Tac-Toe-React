import React from 'react'
import Header from './Header'
import Board from './Board'
import Footer from './Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cPlayer: 'X',
      board : ["\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0"],
      oWins: 0,
      xWins : 0
    }
    this.updatePlayer = this.updatePlayer.bind(this)
    this.checkWin = this.checkWin.bind(this)
    this.reset =this.reset.bind(this)
    this.updateBoard = this.updateBoard.bind(this)
  }
  reset(stale) {
    if (!stale) {
      this.setState(prevState => {
        if (prevState.cPlayer === 'X') {
          prevState.xWins++
        } else {
          prevState.oWins++
        }
        return prevState
    })
    }
    this.setState(prevState => {
      prevState.board = ["\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0","\u00A0"]
      return prevState
  })
}
  updatePlayer() {
  this.setState(prevstate => {
    if (prevstate.cPlayer === "X") {
      prevstate.cPlayer = "O"
    } else {
      prevstate.cPlayer = "X"
    }
    return prevstate
  })
  console.log('upPlayer',this.state.cPlayer)
}
  checkWin() {
  let board = this.state.board
  console.log(board)
  let stale = board.every(x => {
    return x !== "\u00A0"
  })
  if (stale) {
    this.reset(stale)
  }
  for (let i = 0;i<9;i++) {

  }
  if (board[0] === this.state.cPlayer && board[3] === this.state.cPlayer && board[6] === this.state.cPlayer) {
    this.reset()
  }
  if (board[1] === this.state.cPlayer && board[4] === this.state.cPlayer && board[7] === this.state.cPlayer) {
    this.reset()
  }
  if (board[2] === this.state.cPlayer && board[5] === this.state.cPlayer && board[8] === this.state.cPlayer) {
    this.reset()
  }
  if (board[0] === this.state.cPlayer && board[1] === this.state.cPlayer && board[2] === this.state.cPlayer) {
    this.reset()
  }
  if (board[3] === this.state.cPlayer && board[4] === this.state.cPlayer && board[5] === this.state.cPlayer) {
    this.reset()
  }
  if (board[6] === this.state.cPlayer && board[7] === this.state.cPlayer && board[8] === this.state.cPlayer) {
    this.reset()
  }
  if (board[0] === this.state.cPlayer && board[4] === this.state.cPlayer && board[8] === this.state.cPlayer) {
    this.reset()
  }
  if (board[2] === this.state.cPlayer && board[4] === this.state.cPlayer && board[6] === this.state.cPlayer) {
    this.reset()
  }
  console.log('checkWin', this.state.cPlayer)
}
  updateBoard(id) {
  this.setState((prevState) => {
    prevState.board[id] = this.state.cPlayer
    return prevState
  })
  console.log('upBoard',this.state.cPlayer,this.state.board)
}
  render() {
    return (
      <div id="main">
        <Header cPlayer={this.state.cPlayer} />
        <Board cPlayer={this.state.cPlayer} board = {this.state.board}
               onChange={this.updatePlayer} checkWin={this.checkWin}
               upBoard={this.updateBoard}/>
        <Footer xWins={this.state.xWins} oWins={this.state.oWins} />
      </div>)
  }
}

export default App
