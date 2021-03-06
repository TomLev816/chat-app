import React, { Component } from 'react';
import {connect} from 'react-redux'
import { userLoggedInAction, addNewUser } from '../store/actions/'


// ToDo make the signup and Login forms DRY
// making a commit to check 
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
    let user = this.props.loadedUsers.filter(user => user.username === this.state.username)[0]

    // if user exist make that user logged in and send user to user landing page
    if (user) {
      this.props.userLoggedInFunction(user);
      return this.props.history.push('/user-page')
    } else {
      alert('Enter a username and password')
    }
  }

  handleSignup = (event) => {
    event.preventDefault()
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      room_id: 1,
    }

    console.log(newUser);
    fetch('http://localhost:4000/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        // sets new user as logged in
        this.props.userLoggedInFunction(user)

        // adds new user to front end state
        this.props.addNewUserFunction(user)
      })
      // sends user to user landing page
      return this.props.history.push('/user-page')
  }

  changeShowing = (logSign) => {
    // checks to see if user changed betweeen login and sign up
    if (this.state.showing === logSign) {
    } else {
      this.setState({
        showing: logSign,
      })
    }
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
                    <button onClick={this.handleSignup} >Sign Up</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedInFunction: user => dispatch(userLoggedInAction(user)),
    addNewUserFunction: newUser => dispatch(addNewUser(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
