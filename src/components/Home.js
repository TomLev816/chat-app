import React, { Component } from 'react';



export default class Home extends Component {
  state = {
  urlInput: '',
}

changeState = (newState) => {
  this.setState({
    urlInput: newState,
  });
}

handleChange = (event) => {
  this.changeState(event.target.value)
}

handleSubmit = (event) => {
  event.preventDefault()
  const url = this.state.urlInput
  this.changeState('')
  // changes state back to be empty
  
  console.log(url);
}

  render() {
    return (
      <div className='home-main-container'>
        <h1> Home Page </h1>
        <div className='home-input'>
          <h2>enter a url</h2>
          <form onSubmit={this.handleSubmit}>
            <input name='url' className='url-input' placeholder='URL' value={this.state.urlInput} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
      </div>
    )
  }

}
