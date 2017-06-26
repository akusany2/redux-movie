import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <footer className="page-footer">
          <div className="footer-copyright">
              <div className="container">
                  © 2014 Copyright MovieApp
                  <a className="grey-text text-lighten-4 right" href="http://proanky.com/" target="_blank">External link</a>
              </div>
          </div>
      </footer>
    )
  }
}
