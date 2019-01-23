import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from "react-redux";
// import Chat from './Chat'

class VideoPlayer extends Component {

  room = this.props.allRooms.find(room => room.id === this.props.userLoggedIn.room_id)
  render () {
    console.log(this.props.allRooms, this.props.userLoggedIn.room_id);
    console.log(this.room)
    return (
      <div>
        <ReactPlayer url={this.room.url} playing />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    allRooms: state.rooms,
    userLoggedIn: state.userLoggedIn
  }
}

export default connect(mapStateToProps)(VideoPlayer)

// line 10 = <Chat />
