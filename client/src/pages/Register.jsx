import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, json } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: 'name',
    email: 'email',
    password: 'password',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form values:', formData); // <--- Add this line
    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formData)
      });

      if(!response.ok) {
        throw new Error('Faild to Register User');
      }
      const user = await response.json();
      console.log('User Registed:', user);
    } catch (error) {
      console.error('Error Registering User: ', error);
    }
  }

  return (
    <div className='body'>
        <div className="registration-form">
      <h1> Register</h1>
    <form onSubmit={handleSubmit}>
    <TextField
        label="Name"
        className='form-field'
        name='name'
        margin="normal"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value })}

      />

<TextField
        label="Email"
        className='form-field'
        name='email'
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value })}
      />
  
      <TextField
        label="Password"
        type="password"
        autoComplete='on'
        name='password'
        margin="normal"
        className='form-field'
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value })}
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        style={{ marginTop: '1rem' }}
      >
        Click Here to Register
      </Button>

    </form>
    <p><Link to="/login">Click here to Login</Link></p>
    </div>
    </div>
  );
}

export default Register;