import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { authSelectors } from '../../redux/auth';
import AuthOperations from '../../redux/auth/auth-operation';
import Background from '../../pictures/myatnii-fon-27.jpg';

import s from './Register.module.css';
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
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isError = useSelector(authSelectors.getErrorRegister);
  const isLoading = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isError) {
      toast.error('Please, check your data');
      console.log(isError);
    }
  }, [isError]);

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(AuthOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <Container style={styles.Container}>
      <ThemeProvider theme={theme}>
        <form className={s.form} action="submit" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            autoComplete="Name"
            required
            sx={{ mb: '15px' }}
          />
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
            <Button type="submit" variant="contained" size="medium">
              Register
            </Button>
          </div>

          {isLoading && (
            <ThreeCircles
              height="50"
              width="50"
              color="violet"
              outerCircleColor="grey"
              middleCircleColor="violet"
              innerCircleColor="grey"
            />
          )}
        </form>
      </ThemeProvider>
    </Container>
  );
};

export default Register;
