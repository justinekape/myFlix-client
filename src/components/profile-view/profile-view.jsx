import React, { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';

import { Card, CardGroup, Button, Container, Form, Row, Col } from 'react-bootstrap';


export const ProfileView = ({ user, movies }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const storedMovies = localStorage.getItem('movies');

  const [ username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [updateUser, setUpdateUser] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, email, birthday);

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch(`https://jb-myflix.herokuapp.com/users/${user.Username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        alert('Update successful!');
        localStorage.clear();
      } else {
        alert('Update failed');
      }
    });
  };

  const handleDeregister = () => {
    fetch(`https://jb-myflix.herokuapp.com/users/${user.Username}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        alert('Account successfully deleted');
        localStorage.clear();
      } else {
        alert('Something went wrong');
      }
    });
  };


  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Update Your Info</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength='3'
                    />
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId='formBirthday'>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type='date'
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <Button onClick={() => handleDeregister(user._id)} className='delete-button mt-3' type='submit'>Delete Account</Button>
    </Container>
  );
};