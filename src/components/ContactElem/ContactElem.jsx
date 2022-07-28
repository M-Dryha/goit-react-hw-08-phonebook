import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';

import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import EdgesensorLowIcon from '@mui/icons-material/EdgesensorLow';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/myContactsSlice';

const ContactElem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();

  if (isLoading) {
    toast.success('Contact deleted successfully');
  }
  return (
    <Grid item xs={6}>
      <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardContent sx={{ display: 'flex' }}>
          <IconButton>
            <EdgesensorLowIcon />
          </IconButton>

          <Typography sx={{ margin: 0, padding: '10px' }}>{name}:</Typography>
          <Typography sx={{ margin: 0, padding: '10px' }}>{number}</Typography>
        </CardContent>
        <CardActions>
          <Button type="button" onClick={() => deleteContacts(id)}>
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
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactElem;
