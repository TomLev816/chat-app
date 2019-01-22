import React from 'react';


const createRoomCards = (props) => {
  console.log(props.rooms);
  return props.rooms.map((room, index )=>
    <div className='room-card' key={index} onClick={() => props.enterRoom(room.id)}>
      <h3>Room {index + 1}</h3>
      <p>Playing: {room.name} </p>
    </div>
  )
}

export default function RoomCard(props) {
  return (
    <div>
      <h1>RoomCard</h1>
      {createRoomCards(props)}
    </div>
  );
}
