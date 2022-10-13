import React from 'react';

export class MovieCard extends React.Component {
  render() {
    // movie in this.props is the name of the props used in <MovieCard />
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}