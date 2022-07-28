import Image from '../../pictures/gerbera-vetochki-bloknot-fon.jpg';
import { Container, Typography } from '@mui/material';

const styles = {
  Container: {
    backgroundImage: `url(${Image})
    `,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  },
};
const HomeView = () => {
  return (
    <Container maxWidth="lg" style={styles.Container}>
      <Typography
        component="h1"
        sx={{
          fontSize: 28,
          fontWeight: 'bold',
          position: 'absolute',
          top: '45%',
          left: '55%',
        }}
      >
        My PhoneBook
      </Typography>
    </Container>
  );
};

export default HomeView;
