import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img variant='top' src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant='link'>Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};



// *****OLD CODE*****

// export class MovieCard extends React.Component {
//   render() {
//     // movie in this.props is the name of the props used in <MovieCard />
//     const { movie, onMovieClick } = this.props;

//     return (
//       <div onClick={() => onMovieClick(movie)} className="movie-card"> {movie.Title}</div>
//     ); 
//   }
// }

// MovieCard.propTypes = {
//    movie: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     genre: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired
//     }),
//     director: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       bio: PropTypes.string.isRequired,
//       birth: PropTypes.string.isRequired,
//       death: PropTypes.string.isRequired
//      }),
//    }).isRequired
//  };



