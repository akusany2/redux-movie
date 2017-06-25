import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getById } from '../../redux/movie'

@connect(state => ({
  asyncData: state.movie.asyncDataById,
  asyncError: state.movie.asyncError,
  asyncLoading: state.movie.asyncLoading,
}))
export default class Movie extends Component {
  constructor(){
    super()
  }

  componentWillMount(){
    this.props.dispatch(getById(this.props.match.params.movieId))
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading
    } = this.props;

    return (
      <div className='About'>
          {asyncLoading && <p>Loading...</p>}
          {asyncData && <p>{asyncData.original_title}</p>}
      </div>
    );
  }
}
