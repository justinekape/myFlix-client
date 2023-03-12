// import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.Img variant='top' src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant='link'>
          Open
        </Button>
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
//   movie: PropTypes.shape({
//     Title: PropTypes.string.isRequired,
//     Description: PropTypes.string.isRequired,
//     Genre: PropTypes.shape({
//       Name: PropTypes.string.isRequired,
//       Description: PropTypes.string.isRequired
//     }),
//     Director: PropTypes.shape({
//       Name: PropTypes.string.isRequired,
//       Bio: PropTypes.string.isRequired,
//       Birth: PropTypes.string.isRequired,
//       Death: PropTypes.string.isRequired
//     }),
//     ImagePath: PropTypes.string.isRequired
//   }).isRequired,
//   onMovieClick: PropTypes.func.isRequired
// };

