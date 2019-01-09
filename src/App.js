import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/video-player" component={VideoPlayer} />
        </div>
    </Router>
    );
  }
}

export default App;
