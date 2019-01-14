import React, { Component } from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing';
import UserLanding from './components/UserLanding';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/users')
      .then(res => res.json())
      .then(resJson => console.log(resJson))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/UserPage" component={UserLanding} />
          <Route path="/video-player" component={VideoPlayer} />
        </div>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({

});


const exposeAll = connect(
  mapStateToProps,
  mapDispatchToProps
);

const connectedApp = exposeAll(App);

export default connectedApp;
