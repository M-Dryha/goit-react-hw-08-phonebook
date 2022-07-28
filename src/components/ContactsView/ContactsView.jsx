import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Background from '../../pictures/myatnii-fon-27.jpg';
import ListContact from '../ListContacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

const styles = {
  Container: {
    backgroundImage: `url(${Background})
    `,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    paddingTop: '15px',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      light: '#c2185b',
      main: '#f06292',
      dark: '#f8bbd0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const ContactsView = () => {
  return (
    <Container style={styles.Container}>
      <ThemeProvider theme={theme}>
        <ContactForm color="primary" />
        <Filter />
        <ListContact />
      </ThemeProvider>
    </Container>
  );
};

export default ContactsView;
