import React, { Component } from 'react';
import { connect } from "react-redux";
import RoomCard from './RoomCard'
import { changeUserRoom, newRoom } from '../store/actions/'


class UserLanding extends Component {
  state = {
  urlInput: '',
  roomName: '',
  enterRoom: false
}

changeState = (stateName, newState) => {
  this.setState({
    [stateName]: newState,
  });
}

handleChange = (event) => {
  this.changeState(event.target.name, event.target.value)
}

handleSubmit = (event) => {
  event.preventDefault()
  const newRoomObj = {
    'url': this.state.urlInput,
    'name': this.state.roomName,
    'isPrivate': false
  }

  fetch('http://localhost:4000/api/v1/rooms', {
    method: 'POST',
    body: JSON.stringify(newRoomObj),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(resJson => {
    console.log(resJson)
    this.props.createNewRoom(resJson)
    this.enterRoom(this.props.allRooms.length)
  })
}

enterRoom = (roomId) => {
  this.props.changeUserRoom(roomId)
  return this.props.history.push('/video-player')
}

  render() {
    return (
      <div className='user-landing-main-container'>
        <h1> Welcome! </h1>
        <h2>Please enter a url or Choose a room to enter</h2>
        <div className='user-landing-input'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input name='urlInput' className='url-input' placeholder='URL' value={this.state.urlInput} onChange={this.handleChange}/>
            </div>
            <div>
              <input name='roomName' className='roomName' placeholder='Room Name' value={this.state.roomName} onChange={this.handleChange}/>
            </div>
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
    userLoggedIn: state.userLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserRoom: changeRoom => dispatch(changeUserRoom(changeRoom)),
    createNewRoom: newRoomObj => dispatch(newRoom(newRoomObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
