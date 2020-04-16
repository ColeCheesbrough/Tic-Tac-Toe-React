import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Current player: {this.props.cPlayer}</p>
      </div>
    )
  }
}

export default Header
