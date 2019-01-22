import React, { Component } from 'react';
import { connect } from "react-redux";


class UserLanding extends Component {
  state = {
  urlInput: '',
  enterRoom: false
}

changeState = (newState) => {
  this.setState({
    urlInput: newState,
  });
}

handleChange = (event) => {
  this.changeState(event.target.value)
}

handleSubmit = (event) => {
  event.preventDefault()
  const url = this.state.urlInput
  this.changeState('')
  // changes state back to be empty

  console.log(url);
}

enterRoom = () => {
  return this.props.history.push('/video-player')
}

  render() {
    console.log(this.props.allRooms)
    return (
      <div className='user-landing-main-container'>
        <h1> Welcome! </h1>
        <h2>Please enter a url or Choose a room to enter</h2>
        <div className='user-landing-input'>
          <form onSubmit={this.handleSubmit}>
            <input name='url' className='url-input' placeholder='URL' value={this.state.urlInput} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
        <div className='choose-room'>
          <div className='room-card' onClick={this.enterRoom}>
            <h3>room 1</h3>
            <p>playing: NYR VS NYI</p>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allRooms: state.rooms,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(UserLanding)
