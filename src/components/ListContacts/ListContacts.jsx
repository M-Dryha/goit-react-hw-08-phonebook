import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { useGetContactsQuery } from '../../redux/myContactsSlice';
import ContactElem from '../ContactElem';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import s from './listContacts.module.css';

const ListContacts = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  console.log('list', data);

  const normalizedFilter = filter.toLowerCase();
  const visibleContact = data?.filter(f =>
    f.name.toLowerCase().includes(normalizedFilter)
  );
  console.log('visib', visibleContact);
  return (
    <>
      <ContactForm />
      <Filter />
      <ul className={s.list}>
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
        {data &&
          visibleContact.map(({ id, name, number }) => (
            <ContactElem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};

export default ListContacts;
