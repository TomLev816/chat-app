// src/components/Chat.js

import React from 'react';
import { connect } from "react-redux";
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import { roomNewMessage } from '../store/actions/'
// import NewRoomForm from './NewRoomForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

class Chat extends React.Component {

  handleReceivedMessage = response => {
    const { message } = response;
    console.log(message);
    const rooms = [...this.props.allRooms];
    const room = rooms.find(room => room.id === message.room_id);
    room.messages = [...room.messages, message];
    this.props.newMessage(rooms)
  };

  render = () => {
    const {activeRoom, allRooms } = this.props;
    console.log(allRooms);
    return (
      <div className="allRoomsList">
        <ActionCable channel={{ channel: 'RoomsChannel' }} onReceived={this.handleReceivedRoom} />
        {allRooms.length ? <Cable rooms={allRooms} handleReceivedMessage={this.handleReceivedMessage} /> : null}
        {activeRoom ? <MessagesArea room={findActiveRoom(this.props.userLoggedIn, allRooms)} /> : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    newMessage: message => dispatch(roomNewMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

const findActiveRoom = ( user, allRooms) => {
  return allRooms.find(room => room.id === user.room_id)
}
