import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './movie-view.scss';

export const MovieView =({ movies }) => {
  const {movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);




   return (
    <Card>
      <Card.Img variant='top' src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button onClick={handleSubmit} variant='link'>Open</Button>
        </Link>
      </Card.Body>
    </Card>








    //  <div>
    //    <div>
    //      <img className='w-100' src={movie.image} />
    //    </div>
    //    <div>
    //      <span>Title: </span>
    //      <span>{movie.title}</span>
    //    </div>
    //    <div>
    //      <span>Description: </span>
    //      <span>{movie.description}</span>
    //    </div>
    //    <Link to={`/`}>
    //      <button className='back-button'>Back</button>
    //    </Link>
    //  </div>
   );
};