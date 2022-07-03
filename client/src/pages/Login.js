import {useState} from 'react';
import './register.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const resposne = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password,
      }),
    });
    const data = await resposne.json();
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful!')
      window.location.href = '/dashboard'
    } else {
      alert('Check user name and password');
    }
    console.log(data);
  }
  return (
    <div className='register'>
      <h1>Login</h1>
      <div className='form-container'>
        <form onSubmit={loginUser}>
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

export default Login;
