import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import { toast } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './Login.module.css';
import { authSelectors } from '../../redux/auth';
import AuthOperation from '../../redux/auth/auth-operation';
import Background from '../../pictures/myatnii-fon-27.jpg';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c2185b',
      main: '#f06292',
      dark: '#f8bbd0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const styles = {
  Container: {
    backgroundImage: `url(${Background})
    `,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    paddingTop: '15px',
  },
};
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUserName);
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
    // console.log(user);
    setEmail('');
    setPassword('');

    // if () {
    //   console.log(user);
    //   setEmail('');
    //   setPassword('');
    //   return;
    // } else {
    //   toast.error('Ooops, try again');
    // }
  };

  return (
    <Container style={styles.Container}>
      <ThemeProvider theme={theme}>
        <Box
          action="submit"
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 1,
              width: '37ch',
              borderRadius: '5px',
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
      </ThemeProvider>
    </Container>
  );
};

export default Login;
