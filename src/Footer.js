import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div>
      <p> X wins:{this.props.xWins} &nbsp;&nbsp;&nbsp; O wins:{this.props.oWins} </p>
      </div>
    )
  }
}
export default Footer
