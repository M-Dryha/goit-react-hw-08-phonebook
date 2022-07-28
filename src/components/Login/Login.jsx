import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './Login.module.css';
import AuthOperation from '../../redux/auth/auth-operation';

// const Container = styled.div`
//     border: '1px solid gray',
//   }
// `;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const onLoginSubmit = e => {
    e.preventDefault();
    dispatch(AuthOperation.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    // <Container>
    <Box
      action="submit"
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '37ch',
          // mr: 'auto',
          // ml: 'auto',
          // border: '1px solid gray',
          borderRadius: '5px',
          // padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          w: '350px',
          margin: '20px auto',
        },
      }}
      noValidate
      // className={s.form}
      onSubmit={onLoginSubmit}
      autoComplete="off"
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleNameChange}
        autoComplete="Email"
      />
      <TextField
        id="2"
        label="Password"
        type="text"
        name="password"
        value={password}
        onChange={handleNameChange}
        autoComplete="Password"
      />
      <div className={s.button}>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{
            w: '100px',
            margin: '0 auto',
          }}
        >
          Log In
        </Button>
      </div>
    </Box>
    // </Container>
  );
};

export default Login;
