// src/components/Chat.js

import React from 'react';
import { connect } from "react-redux";
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
// import NewRoomForm from './NewRoomForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

class Chat extends React.Component {

  // // all rooms
  // componentDidMount = () => {
  //   fetch(`${API_ROOT}/rooms`)
  //     .then(res => res.json())
  //     .then(rooms => this.setState({ rooms }));
  // };


  handleReceivedRoom = response => {
    const { room } = response;
    this.setState({
      rooms: [...this.props.allRooms, room]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const rooms = [...this.props.allRooms];
    const room = rooms.find(
      room => room.id === message.room_id
    );
    room.messages = [...room.messages, message];
    this.setState({ rooms });
  };

  render = () => {
    const {activeRoom } = this.props;
    const rooms = this.props.allRooms
    console.log(rooms);
    return (
      <div className="roomsList">
        <ActionCable channel={{ channel: 'RoomsChannel' }} onReceived={this.handleReceivedRoom} />
        {rooms.length ? (
          <Cable rooms={rooms} handleReceivedMessage={this.handleReceivedMessage} />
        ) : null}
        {activeRoom ? (
          <MessagesArea room={activeRoom} />
        ) : null}
      </div>
    );
  };
}


const mapStateToProps = (state) => {
  return {
    allRooms: state.rooms,
    userLoggedIn: state.userLoggedIn,
    activeRoom: state.activeRoom,
  }
}

export default connect(mapStateToProps)(Chat)
