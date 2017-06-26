import React, { Component } from 'react'

export default class Loader extends Component {
  render(){
    return(
      <div className="progress white loader">
          <div className="indeterminate"></div>
      </div>
    )
  }
}
