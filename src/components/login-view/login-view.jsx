import React, { useState } from 'react';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

export const LoginView = ({ onLoggedIn }) => {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();
    console.log(username, password);

    const data = {
      Username: username,
      Password: password
    };

    fetch('https://jb-myflix.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response: ', data);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          onLoggedIn(data.user, data.token);
      } else {
        alert("No such user");
      }
    })
    .catch((e) => {
      alert('Something went wrong');
    });
  };

  return (
    <Container>
      <Row>
        <Col>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Login Here!</Card.Title>
              <Form>
                <Form.Group controlId='formUsername'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    requiredminLength='3'
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
                <Button onSubmit={handleSubmit} variant='primary' type='submit'>
                    Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
