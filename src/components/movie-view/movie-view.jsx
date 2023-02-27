import React from 'react';
import './movie-view.scss';

export const MovieView =({movie, onBackClick}) => {

  return (
    <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button 
          onClick={onBackClick}
          className='back-button'
          style={{ cursor: 'pointer' }}
        >
          Back
        </button>
    </div>
  );
}