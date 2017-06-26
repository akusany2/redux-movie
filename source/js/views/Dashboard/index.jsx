import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getDiscovery } from '../../redux/movie';
import api from '../../api';
import { routeCodes } from '../App'
import Icon from 'components/Global/Icon';
import { Card, CardTitle, Row, Col, Container } from 'react-materialize';


@connect(state => ({
  asyncData: state.movie.asyncDataDiscovery,
  asyncError: state.movie.asyncError,
  asyncLoading: state.movie.asyncLoading,
}))
export default class Dashboard extends Component {

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.getBackdrop = this.getBackdrop.bind(this);

  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(getDiscovery());
  }

  componentWillMount(){
    this.props.dispatch(getDiscovery())
  }

  getBackdrop(img){
    return api.getImage(img, 'w780');
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
    } = this.props;

    return (
      <div className='home'>

          <div className='container'>
              { asyncData && asyncData.results.map( (result) => {
                  return <Card className="large"
                      key={result.id}
                      header={<CardTitle image={this.getBackdrop(result.backdrop_path)}>{result.title}</CardTitle>}
                      actions={[<Link to={routeCodes.MOVIE+'/'+result.id} >{result.title}</Link>]}>
                      {result.overview}
                  </Card>
              } ) }
              { asyncLoading && <p>Loading...</p> }
              { asyncError && <p>Error: { asyncError }</p> }
              {/* <button
                  disabled={ asyncLoading }
                  onClick={ this.handleAsyncButtonClick }
                  >
                  Get async data
              </button> */}
          </div>


      </div>
    );
  }
}
