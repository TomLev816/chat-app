// src/components/MessagesArea.js

import React from 'react';
import { connect } from "react-redux";
import NewMessageForm from './NewMessageForm';


const MessagesArea = ({
  room: { id, name, messages },
}) => {
  return (
    <div className="messagesArea">
      <h2>{name}</h2>
      <p>{orderedMessages(messages)}</p>
      <NewMessageForm roomId={id} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedUsers: state.users,
  }
}


export default connect(mapStateToProps)(MessagesArea)

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  const slicedSortedMessages = sortedMessages.slice(-10)
  return slicedSortedMessages.map(message => {
    return <p key={message.id}> user_{message.user_id} - {message.text}</p>;
  });
};
