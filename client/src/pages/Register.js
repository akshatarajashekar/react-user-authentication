import {useState} from 'react';
import './register.css';
import {useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  async function registerUser(event) {
    event.preventDefault()
    const resposne = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password,
      }),
    });
    const data = await resposne.json()
    if (data.status === 'ok') {
      navigate("../login", { replace: true });
    }
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <div className='form-container'>
        <form onSubmit={registerUser}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
          <br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
          <br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
          <br/>
          <input type="submit" value="register"/>
        </form>
      </div>
    </div>
  );
}

export default Register;
