// src/components/NewMessageForm.js

import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { connect } from "react-redux";
import { roomNewMessage } from '../store/actions/'

class NewMessageForm extends React.Component {
  state = {
    text: '',
    roomId: this.props.roomId
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ roomId: nextProps.roomId });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const message = {
      'text': this.state.text,
      'room_id': this.state.roomId,
      'user_id': this.props.userLoggedIn.id
    }
    console.log(message);
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(message)
    })
    .then(res => res.json())
    .then(messageRes => this.props.newMessage(messageRes))
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newMessage: message => dispatch(roomNewMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageForm)
