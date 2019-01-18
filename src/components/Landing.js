import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Redirect} from 'react-router-dom'

// ToDo make the signup and Login forms not need to be repetitive

class Landing extends Component {

  state = {
    username: '',
    password: '',
    showing: 'login'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username) {
      return this.props.history.push('/user-page')
    } else {
      alert('Enter a username and password')
    }
  }

  changeShowing = (logSign) => {
    console.log(logSign);
    this.setState({
      showing: logSign,
    }, console.log(this.state.showing))
  }

  render() {
    const {username, password, showing} = this.state
    return (
      <div className='landing-container'>
        <div className='landing-welcome'>
          <h1>Welcome to Watch and Chat</h1>
        </div>
        <div className='landing-login-signup'>
          <div className='login' onClick={() => this.changeShowing('login')}>
            <h2>Login</h2>
            {showing === 'login' ?
            <div>
              <div>
                <input
                  name='username'
                  placeholder='Username'
                  value={username}
                  onChange={this.handleChange}>
                </input>
              </div>
              <div>
                <input
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={this.handleChange}>
                </input>
              </div>
              <div>
                <center>
                  <button onClick={this.handleSubmit} >Submit</button>
                </center>
              </div>
            </div> : null}
          </div>
          <div className='signup' onClick={() => this.changeShowing('signup')}>
            <h2>Signup</h2>
              {showing === 'signup' ?
              <div>
                <div>
                  <input
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={this.handleChange}>
                  </input>
                </div>
                <div>
                  <input
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={this.handleChange}>
                  </input>
                </div>
                <div>
                  <center>
                    <button onClick={this.handleSubmit} >Sign Up</button>
                  </center>
                </div>
              </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadedUsers: state.users,
    loadedUser: state.userLoggedIn
  }
}

export default connect(mapStateToProps)(Landing)
