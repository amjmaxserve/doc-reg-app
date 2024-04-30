import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log('Form data submitted:', data);    
    };   
  return (
    <div className='body'>
        <div className="registration-form">
      <h1 className='form-title'> Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
        label="userName"
        className='.form-field'
        {...register('name')}
        fullWidth
        margin="normal"
      />

      {/* Display error message if email is required
      {errors.email && (
        <span style={{ color: 'red' }}>Email is mandatory</span>
      )} */}
      <TextField
        label="Password"
        type="password"
        autoComplete='on'
        {...register('password')}
        fullWidth
        margin="normal"
        className='.form-field'
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        style={{ marginTop: '1rem' }}
      >
        Click Here to Login
      </Button>

    </form>
    <p>
    <p><Link to="/register">Click here to Register</Link></p>
    </p>
    </div>
    </div>
  );
}

export default Login;
