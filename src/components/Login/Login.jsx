import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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
  const issLoginError = useSelector(authSelectors.getErrorLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (issLoginError) {
      toast.error('Please, check your data');
    }
  }, [issLoginError]);

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
    // setEmail('');
    // setPassword('');
  };

  return (
    <Container style={styles.Container}>
      <ThemeProvider theme={theme}>
        <form className={s.form} action="submit" onSubmit={onLoginSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleNameChange}
            autoComplete="Email"
            required
            sx={{ mb: '15px' }}
          />
          <TextField
            id="2"
            label="Password"
            type="text"
            name="password"
            value={password}
            onChange={handleNameChange}
            autoComplete="Password"
            required
            sx={{ mb: '15px' }}
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
        </form>
      </ThemeProvider>
    </Container>
  );
};

export default Login;
