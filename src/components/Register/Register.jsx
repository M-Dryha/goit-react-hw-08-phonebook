import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import register from '../../redux/auth/auth-operation';
import AuthOperation from '../../redux/auth/auth-operation';
// import { useRegisterUserMutation } from '../../redux/auth/registerSlice';
import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();

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

  // const registerNewUser = async e => {
  //   try {
  //     await registerUser({ name, email, password });
  //     console.log({ name, email, password });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // const nameContact = contacts.find(
    //   c => c.name.toLowerCase() === name.toLowerCase()
    // );
    // if (nameContact) {
    //   toast.error(`${name} is already in contact`);
    //   return;
    // } else {
    // registerNewUser();

    dispatch(AuthOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} action="submit" onSubmit={handleSubmit}>
      <label className={s.label}>
        <span className={s.formSpan}> Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={s.label}>
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
      </label>
      <label className={s.label}>
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
      </label>
      <button type="submit" className={s.button}>
        Register
      </button>
      {/* {isLoading && (
        <ThreeCircles
          height="50"
          width="50"
          color="violet"
          outerCircleColor="grey"
          middleCircleColor="violet"
          innerCircleColor="grey"
        />
      )} */}
    </form>
  );
};

export default Register;
