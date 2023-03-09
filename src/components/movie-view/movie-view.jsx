import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView =({ movies }) => {
  const {movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);




   return (
     <div>
       <div>
         <img className='w-100' src={movie.image} />
       </div>
       <div>
         <span>Title: </span>
         <span>{movie.title}</span>
       </div>
       <div>
         <span>Description: </span>
         <span>{movie.description}</span>
       </div>
       <Link to={`/`}>
         <button className='back-button'>Back</button>
       </Link>
     </div>
   );
};