import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getDiscovery } from '../../redux/movie';
import { routeCodes } from '../App'
import Icon from 'components/Global/Icon';
import bookImg from '../../../assets/img/book2.jpg';


@connect(state => ({
  asyncData: state.movie.asyncDataDiscovery,
  asyncError: state.movie.asyncError,
  asyncLoading: state.movie.asyncLoading,
}))
export default class Dashboard extends Component {

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(getDiscovery());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
    } = this.props;

    return (
      <div className='Dashboard'>
          <h1>Marvin</h1>
          <p>
              Boilerplate for kicking off React/Redux applications.
          </p>

          <hr />

          <h2>Examples</h2>


          <h3>Async action example</h3>
          <div className='Example'>
              { asyncData && asyncData.results.map( (result) => {
                  return <p key={result.id}><Link to={routeCodes.MOVIE+'/'+result.id}>{result.title}</Link></p>
              } ) }
              { asyncLoading && <p>Loading...</p> }
              { asyncError && <p>Error: { asyncError }</p> }
              <button
                  disabled={ asyncLoading }
                  onClick={ this.handleAsyncButtonClick }
              >
                  Get async data
              </button>
          </div>

          <h3>Background image</h3>
          <div className='Example'>
              <div className='BackgroundImgExample' />
          </div>

        <h3>Image imported to the component</h3>
        <div className='Example'>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>

        <h3>SVG sprite icon set</h3>
        <div className='Example'>
          <Icon glyph='square' />
          <Icon glyph='circle' />
          <Icon glyph='triangle' />
        </div>
      </div>
    );
  }
}
