import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import Movie from 'views/Movie';
import MoviesVs from 'views/MoviesVs';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';
import Footer from 'components/Global/Footer';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  MOVIE: `${ publicPath }movie`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
          <div className='App'>
              <Menu />
              <div className='Page'>
                  <Switch>
                      <Route exact path={ publicPath } component={ Dashboard } />
                      <Route path={ routeCodes.ABOUT } component={ About } />
                      <Route path={ routeCodes.MOVIE+'/:movieId1-vs-:movieId2' } component={ MoviesVs } />
                      <Route path={ routeCodes.MOVIE+'/:movieId' } component={ Movie } />
                      <Route path='*' component={ NotFound } />
                  </Switch>
              </div>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}
