import { useState } from 'react';
// import { ThreeCircles } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/myContactsSlice';
import s from './contactForm.module.css';

export default function ContactForm() {
  // const [addContacts, { isLoading }] = useAddContactMutation();
  const [addContacts] = useAddContactMutation();
  // console.log(useAddContactMutation());
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const fetchNewContact = async e => {
    try {
      await addContacts({ name, number });
      toast.success('Contact added successfully');
    } catch (err) {
      toast.error('Error');
      console.error(err);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const nameContact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    if (nameContact) {
      toast.error(`${name} is already in contact`);
      return;
    } else {
      fetchNewContact();
      setName('');
      setNumber('');
    }
  };

  return (
    <>
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
        <TextField
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          autoComplete="Number"
        />

        <div className={s.button}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            // sx={{ width: 150 }}
          >
            Add Contact
          </Button>
        </div>
      </Box>
    </>
  );
}
