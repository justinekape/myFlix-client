import React, { useState } from 'react';

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
    <form>
      <label>
        Username:
        <input 
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
      </label>
      <label>
        Password:
        <input 
        type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </label>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};