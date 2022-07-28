import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { Grid } from '@mui/material';
import { useGetContactsQuery } from '../../redux/myContactsSlice';
import ContactElem from '../ContactElem';

const ListContacts = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContact = data?.filter(f =>
    f.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </Grid>
    </>
  );
};

export default ListContacts;
