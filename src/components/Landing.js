import React, { Component } from 'react';


export default class Landing extends Component {

  render() {
    return (
      <div className='landing-container'>
        <div className='landing-welcome'>
          <h1>Welcome to Watch and Chat</h1>
        </div>
        <div className='landing-login-signup'>
          <div className='login'>
            <h2>Login</h2>
          </div>
          <div className='signup'>
            <h2>Signup</h2>
          </div>
        </div>
      </div>
    );
  }
}
