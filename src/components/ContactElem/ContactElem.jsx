import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/myContactsSlice';
import s from './ContactElem.module.css';

const ContactElem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();

  if (isLoading) {
    toast.success('Contact deleted successfully');
  }
  return (
    <li className={s.itemContact}>
      <p className={s.contact}>{name}:</p>
      <p className={s.contact}>{number}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContacts(id)}
      >
        {isLoading ? (
          <ThreeCircles
            height="10"
            width="10"
            color="violet"
            outerCircleColor="grey"
            middleCircleColor="violet"
            innerCircleColor="grey"
          />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};
ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactElem;
