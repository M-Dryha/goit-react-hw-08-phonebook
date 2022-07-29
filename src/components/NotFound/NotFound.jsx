import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Background from '../../pictures/myatnii-fon-27.jpg';

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

function NotFoundPage() {
  return (
    <Container style={styles.Container}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/"> To home page </Link>
      </p>
    </Container>
  );
}

export default NotFoundPage;
