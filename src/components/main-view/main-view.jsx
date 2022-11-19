import React from 'react';
import axios from 'axios';
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    // initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      newUser: true
    };
  }

  componentDidMount() {
    axios.get('https://jb-myflix.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /* when a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie */

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* when a user successfully logs in, this function updates the 'user' property in state to that particular user */

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistration(newUser) {
    this.setState({
      newUser
    });
  }

  render() {
    const { movies, selectedMovie, user, newUser } = this.state;

    if (!newUser) return <RegistrationView />;

    /* if there's no user, the LoginView is rendered. if there's a user logged in, the user details are passed as a prop to the LoginView */
    if (!user) 
      return (
        <LoginView 
          onLoggedIn={(user) => this.onLoggedIn(user)} 
          onRegistration={(newUser) => this.onRegistration(newUser)} 
        />
      );

    // before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />; 
    
    return (
        <div className="main-view">
          {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
            ))
          }
        </div>
      );
    }
  }
