import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import { getById, getVs } from '../../redux/movie'
import Loader from '../../components/Global/Loader';

@connect(state => ({
  asyncData: state.movie.asyncDataById,
  asyncDataVs1: state.movie.asyncDataVs1,
  asyncDataVs2: state.movie.asyncDataVs2,
  asyncError: state.movie.asyncError,
  asyncLoading: state.movie.asyncLoading,
}))
export default class MoviesVs extends Component {
  constructor(){
    super()
  }

  componentWillMount(){
    const { movieId1, movieId2 } = this.props.match.params;
    this.props.dispatch(getById(movieId1))
    this.props.dispatch(getVs(movieId1, movieId2))
  }

  render() {

    const {
      asyncData,
      asyncError,
      asyncLoading,
      asyncDataVs1,
      asyncDataVs2
    } = this.props;


    const posterImage1 = asyncDataVs1 && api.getImage(asyncDataVs1.poster_path, 'w780'),
    IMDbLink1 = `http://www.imdb.com/title/${asyncDataVs1 && asyncDataVs1.imdb_id}`,
    movieHomepage1 = asyncDataVs1 && asyncDataVs1.homepage,
    overview1 = asyncDataVs1 && asyncDataVs1.overview;

    const posterImage2 = asyncDataVs2 && api.getImage(asyncDataVs2.poster_path, 'w780'),
    IMDbLink2 = `http://www.imdb.com/title/${asyncDataVs2 && asyncDataVs2.imdb_id}`,
    movieHomepage2 = asyncDataVs2 && asyncDataVs2.homepage,
    overview2 = asyncDataVs2 && asyncDataVs2.overview;
    return (
      <div className='single-movie page'>
          {asyncLoading && <Loader></Loader>}

          <div className="container">
              <div className="row">
                  <div className="col s6">
                      <div className="poster">
                          <img src={posterImage1} className="responsive-img" />
                      </div>
                      {asyncDataVs1 && <h3>{asyncDataVs1.original_title}</h3>}
                      <p><span className="thin">
                          Runtime: {asyncDataVs1 && asyncDataVs1.runtime}min
                      </span></p>
                      <div>
                          <a className="waves-effect waves-light btn" href={IMDbLink1} target="_blank"><i className="material-icons left"> web
                          </i> IMDb</a>
                          &nbsp;
                          <a className="waves-effect waves-light btn" href={movieHomepage1} target="_blank"><i className="material-icons left"> theaters
                          </i> Movie Homepage</a>
                      </div>

                      <div>
                          <p className="flow-text">{overview1}</p>
                      </div>
                      <div>
                          <h5>Tags</h5>
                          {asyncDataVs1 && asyncDataVs1.genres.map((genre) => {
                              return <div className="chip" key={genre.id}>{genre.name}</div>
                          })}

                      </div>
                  </div>

                  <div className="col s6">
                      <div className="poster">
                          <img src={posterImage2} className="responsive-img" />
                      </div>
                      {asyncDataVs2 && <h3>{asyncDataVs2.original_title}</h3>}
                      <p><span className="thin">
                          Runtime: {asyncDataVs2 && asyncDataVs2.runtime}min
                      </span></p>
                      <div>
                          <a className="waves-effect waves-light btn" href={IMDbLink2} target="_blank"><i className="material-icons left"> web
                          </i> IMDb</a>
                          &nbsp;
                          <a className="waves-effect waves-light btn" href={movieHomepage2} target="_blank"><i className="material-icons left"> theaters
                          </i> Movie Homepage</a>
                      </div>

                      <div>
                          <p className="flow-text">{overview2}</p>
                      </div>
                      <div>
                          <h5>Tags</h5>
                          {asyncDataVs2 && asyncDataVs2.genres.map((genre) => {
                              return <div className="chip" key={genre.id}>{genre.name}</div>
                          })}

                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}
