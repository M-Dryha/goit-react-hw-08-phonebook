import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './Login.module.css';
import AuthOperation from '../../redux/auth/auth-operation';

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
    // <form className={s.form} action="submit" onSubmit={onLoginSubmit}>
    //   <label className={s.label}>
    //     <span className={s.formSpan}> E-mail</span>
    //     <input
    //       className={s.input}
    //       type="email"
    //       name="email"
    //       // pattern=".+@globex\.com"
    //       title="E-mail "
    //       required
    //       onChange={handleNameChange}
    //       value={email}
    //     />
    //   </label>
    //   <label className={s.label}>
    //     <span className={s.formSpan}>Password</span>
    //     <input
    //       className={s.input}
    //       type="text"
    //       name="password"
    //       //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       onChange={handleNameChange}
    //       value={password}
    //     />
    //   </label>
    //   <button type="submit" className={s.button}>
    //     Log In
    //   </button>
    //   {/* {isLoading && (
    //     <ThreeCircles
    //       height="50"
    //       width="50"
    //       color="violet"
    //       outerCircleColor="grey"
    //       middleCircleColor="violet"
    //       innerCircleColor="grey"
    //     />
    //   )} */}
    // </form>

    // <section className={s.form}>
    <Box
      action="submit"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '37ch', mr: 'auto', ml: 'auto' },
      }}
      noValidate
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
          // className={s.button}
          type="submit"
          variant="contained"
          size="medium"
        >
          Log In
        </Button>
      </div>
    </Box>
    // </section>
  );
};

export default Login;
