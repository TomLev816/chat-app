import React, { Component } from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { getUsers, getRooms } from './store/actions/'

import Landing from './components/Landing';
import UserLanding from './components/UserLanding';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/users')
      .then(res => res.json())
      .then(resJson => this.props.loadUsersFromApi(resJson))

    fetch('http://localhost:4000/api/v1/rooms')
      .then(res => res.json())
      .then(resJson => this.props.loadRoomsFromApi(resJson))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/user-page" component={UserLanding} />
          <Route path="/video-player" component={VideoPlayer} />
        </div>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    rooms: state.rooms,
  };
};

const mapDispatchToProps = dispatch => ({
  loadUsersFromApi: apiUserData => dispatch(getUsers(apiUserData)),
  loadRoomsFromApi: apiRoomData => dispatch(getRooms(apiRoomData)),
});

const exposeAll = connect(
  mapStateToProps,
  mapDispatchToProps
);

const connectedApp = exposeAll(App);

export default connectedApp;
