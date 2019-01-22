import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Chat from './Chat'

export default class VideoPlayer extends Component {
  render () {
    return (
      <div>
        <ReactPlayer url='https://helios.gorillavid.in:8182/p/gAAAAABcNg3TfU9Jx6KAZALMW0n_ijvCT4H1NsOnkteSS_A23elMwFLlkj6pXGVOALZwfOn0vPiDbjvDlFv545bRpi3a8e40k-K_sHz7XfoVMUccMFhE8we56GQgaJ1wW9eE4UzvRUDr/video.mp4' playing />
        <Chat />
      </div>
    )
  }
}
