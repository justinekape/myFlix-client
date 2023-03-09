import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { SignupView } from '../signup-view/signup-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main-view.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


useEffect(() => {
  if (!token) {
    return;
  }

  fetch('https://jb-myflix.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`},
  })
  .then((response) => response.json())
  .then((data) => {
    console.log (setMovies(data));
  });
}, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
      />
      <Row className='justify-content-md-center'>
        <Routes>
          <Route
            path='/signup'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path='/login'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path='/movies/:movieId'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className='mb-4' key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};






// ****** OLD CODE ****
// return (
//     <Row className='justify-content-md-center'>
//       {!user ? (
//         <Col md={5}>
//         <LoginView onLoggedIn={(user, token) => {
//           setUser(user);
//           setToken(token);
//         }} />
       
//         <SignupView />
//       </Col>
//       ) : selectedMovie ? (
//         <Col md={8} style={{ border: '1px solid black' }}>
//           <MovieView
//           style={{ border: '1px solid green'}}
//             movie={selectedMovie}
//             onBackClick={() => setSelectedMovie(null)}
//           />
//         </Col>
//       ) : movies.length === 0 ? (
//         <div> The list is empty!</div>
//       ) : (
//         <>
//           {movies.map((movie) => (
//             <Col className='mb-5' key={movie.id} md={3}>
//               <MovieCard
//                 movie={movie}
//                 onMovieClick={(newSelectedMovie) => {
//                   setSelectedMovie(newSelectedMovie);
//                 }}
//               />
//             </Col>
//           ))}
//         </>
//       )}
//       <button className='logout-button' onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
//     </Row>
//   );
// }

// if (!user) {
//   return (
//     <>
//       <LoginView onLoggedIn={(user, token) => {
//         setUser(user);
//         setToken(token);
//       }} />
//       or
//       <SignupView />
//     </>
//   );
// }

// if (movies.length === 0) return <div className="main-view" />; 
    
//     return (
//         <div className="main-view">
//           {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
//           {selectedMovie
//             ? (
//               <Row className="justify-content-md-center">
//                 <Col md={8}>
//                 <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { setSelectedMovie(newSelectedMovie); }}/>
//                 </Col>
//               </Row>
//             )
//             : movies.map(movie => (
//               <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { setSelectedMovie(newSelectedMovie) }}/>
//             ))
//           }
//           <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }} className='back-button'>Logout</button>
//         </div>
//       );
//  }
