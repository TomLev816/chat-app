import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing';
import UserLanding from './components/UserLanding';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

class App extends Component {
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

export default App;
