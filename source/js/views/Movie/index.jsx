import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import { getById } from '../../redux/movie'
import Loader from '../../components/Global/Loader';

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
    const backdropImage = asyncData && api.getImage(asyncData.backdrop_path, 'w1280'),
    IMDbLink = `http://www.imdb.com/title/${asyncData && asyncData.imdb_id}`,
    movieHomepage = asyncData && asyncData.homepage,
    overview = asyncData && asyncData.overview;
    return (
      <div className='single-movie page'>
          {asyncLoading && <Loader></Loader>}

          <div className="parallax"
              style={{
                  backgroundImage: `url(${backdropImage})`
              }}>
          </div>

          <div className="container">
              {asyncData && <h3>{asyncData.original_title}</h3>}
              <p><span className="thin">
                  Runtime: {asyncData && asyncData.runtime}min
              </span></p>
              <div>
                  <a className="waves-effect waves-light btn" href={IMDbLink} target="_blank"><i className="material-icons left"> web
                  </i> IMDb</a>
                  &nbsp;
                  <a className="waves-effect waves-light btn" href={movieHomepage} target="_blank"><i className="material-icons left"> theaters
                  </i> Movie Homepage</a>
              </div>

              <div>
                  <p className="flow-text">{overview}</p>
              </div>
              <div>
                  <h5>Tags</h5>
                  {asyncData && asyncData.genres.map((genre) => {
                      return <div className="chip" key={genre.id}>{genre.name}</div>
                  })}

              </div>
          </div>

      </div>
    );
  }
}
