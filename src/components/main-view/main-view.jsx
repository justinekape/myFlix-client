import { useEffect, useState } from 'react';
import axios from 'axios';
// import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { SignupView } from '../signup-view/signup-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [newUser, setNewUser] = useState("");


useEffect(() => {
  if (!token) {
    return;
  }

  fetch('https://jb-myflix.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`},
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
}, [token]);

// REST OF THE CODE

if (!user) {
  return (
    <>
      <LoginView onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }} />
      or
      <SignupView />
    </>
  );
}

if (movies.length === 0) return <div className="main-view" />; 
    
    return (
        <div className="main-view">
          {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
          {selectedMovie
            ? (
              <Row className="justify-content-md-center">
                <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                </Col>
              </Row>
            )
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
            ))
          }
        </div>
      );

<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>

}




// ****** OLD CODE ******

// export class MainView extends React.Component {

//   constructor() {
//     super();
//     // initial state is set to null
//     this.state = {
//       movies: [],
//       selectedMovie: null,
//       user: null
//     };
//   }

//   componentDidMount() {
//     axios.get('https://jb-myflix.herokuapp.com/movies')
//       .then(response => {
//         this.setState({
//           movies: response.data
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   /* when a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie */

//   setSelectedMovie(movie) {
//     this.setState({
//       selectedMovie: movie
//     });
//   }

//   /* registration */
//   onRegistration(newUser) {
//     this.setState({
//       newUser
//     });
//   }

//   /* when a user successfully logs in, this function updates the 'user' property in state to that particular user */

//   onLoggedIn(user) {
//     this.setState({
//       user
//     });
//   }


//   render() {
//     const { movies, selectedMovie, user, newUser } = this.state;
//     const [token, setToken] = useState(null);

//     // if (!newUser) return <RegistrationView onRegistration={newUser => this.onRegistration(newUser)} />;

//     /* if there's no user, the LoginView is rendered. if there's a user logged in, the user details are passed as a prop to the LoginView */
    // if (!user) {
    //   return (
    //     <LoginView 
    //       onLoggedIn={(user, token) => {
    //         setUser(user);
    //         setToken(token);
    //       }}
    //     />
    //   );
    // }

//     // before the movies have been loaded
//     if (movies.length === 0) return <div className="main-view" />; 
    
//     return (
//         <div className="main-view">
//           {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
//           {selectedMovie
//             ? (
//               <Row className="justify-content-md-center">
//                 <Col md={8}>
//                 <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
//                 </Col>
//               </Row>
//             )
//             : movies.map(movie => (
//               <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
//             ))
//           }
//         </div>
//       );
//     } 
//   }

//   // <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
