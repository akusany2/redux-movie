import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import { routeCodes } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
          <nav className="blue-grey">
              <div className="nav-wrapper">
                  <a href="#" className="brand-logo right">Logo</a>
                  <ul className="left">
                      <li><Link to={ routeCodes.DASHBOARD }>Home</Link></li>
                      <li><Link to={ routeCodes.ABOUT }>About</Link></li>
                      <li><Link to="404">404</Link></li>
                  </ul>
              </div>
          </nav>

      </div>
    );
  }
}
