import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
// import register from '../../redux/auth/auth-operation';
// import { contactApi } from '../../redux/myContactsSlice';
import { authSelectors } from '../../redux/auth';
import AuthOperation from '../../redux/auth/auth-operation';
// import contactApi from '../../redux/myContactsSlice';
// import { useUtilQuery } from '../../redux/myContactsSlice';

import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const util = useUtilQuery();

  const isLoading = useSelector(authSelectors.getIsLoggedIn);

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
    // dispatch(util.invalidateTags(['contacts']));
    dispatch(AuthOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
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
      action="submit"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        autoComplete="Name"
      />
      {/* <label className={s.label}>
          <span className={s.formSpan}> E-mail</span>
          <input
            className={s.input}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            // title="E-mail "
            // required
            value={email}
            onChange={handleNameChange}
          />
        </label> */}
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleNameChange}
        autoComplete="Email"
      />
      {/* <label className={s.label}>
          <span className={s.formSpan}> Password</span>
          <input
            className={s.input}
            type="text"
            name="password"
            //   title="E-mail "
            // required
            value={password}
            onChange={handleNameChange}
          />
        </label> */}
      <TextField
        label="Password"
        type="text"
        name="password"
        value={password}
        onChange={handleNameChange}
        autoComplete="Password"
      />
      {/* <button type="submit" className={s.button}>
        Register
      </button> */}
      <div className={s.button}>
        <Button
          // className={s.button}
          type="submit"
          variant="contained"
          size="medium"
        >
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
    </Box>
    // </section>
  );
};

export default Register;
