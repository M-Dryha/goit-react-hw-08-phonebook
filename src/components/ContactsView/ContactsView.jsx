import ListContact from '../ListContacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

const ContactsView = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ListContact />
    </>
  );
};

export default ContactsView;
