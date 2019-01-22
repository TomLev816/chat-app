import React, { Component } from 'react';
import { connect } from "react-redux";
import RoomCard from './RoomCard'
import { changeUserRoom } from '../store/actions/'


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

enterRoom = (roomId) => {
  console.log(roomId);
  this.props.changeUserRoom(roomId)
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
          <RoomCard enterRoom={this.enterRoom} rooms={this.props.allRooms}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserRoom: changeRoom => dispatch(changeUserRoom(changeRoom)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
