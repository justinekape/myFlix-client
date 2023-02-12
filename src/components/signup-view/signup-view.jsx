import e from "cors";
// import PropTypes from 'prop-types';
import { useState } from "react";

export const SignUpView = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    e.preventDefault();
    console.log(username, password, email, birthday);

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch('https://jb-myflix.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful');
        props.onSignUp(username);
      } else {
        alert('Signup failed');
      }
    });


  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          requiredminLength="3"
        />
      </label>
      <label>
        Password:
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// SignUpView.propTypes = {
//   onSignUp: PropTypes.func.isRequired
// };