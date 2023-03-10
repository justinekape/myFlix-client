import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';

export const UpdateUser = ({ handleUpdate }) => {

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');

  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type='text'
          value={user.Username}
          onChange={(e) => handleUpdate(e.target.value)}
          required
          mingLength='3'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type='password'
          value={user.Password}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type='email'
          value={user.Email}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type='date'
          value={user.Birthday}
          onChange={(e) => handleUpdate(e.target.value)}
          required
        />
      </Form.Group>

      <Button onSubmit={handleSubmit} variant='primary' type='submit'>
        Submit Changes
      </Button>
    </Form>
  )
}