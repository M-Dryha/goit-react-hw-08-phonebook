import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/myContactsSlice';
import s from './contactForm.module.css';

export default function ContactForm() {
  const [addContacts] = useAddContactMutation();
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
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChange}
          autoComplete="Number"
          required
          sx={{ mb: '15px' }}
        />

        <div className={s.button}>
          <Button type="submit" variant="contained" size="medium">
            Add Contact
          </Button>
        </div>
      </form>
    </>
  );
}
