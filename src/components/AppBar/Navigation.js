import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import styled from 'styled-components';

const Link = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  color: white;
  margin-right: 30px;
  &.active {
    background-color: #f8bbd0;
    border-radius: 5px;
  }
`;
const Navigate = styled.nav`
  display: flex;
  justify-content: ;
`;

const Navigation = () => {
  return (
    <Navigate>
      <Link to="/">
        <Button type="submit" variant="contained" size="medium">
          <HouseSidingIcon sx={{ color: 'white' }} />
        </Button>
      </Link>
      <Link to="/contacts">
        <Button type="submit" variant="contained" size="medium">
          My Contacts
        </Button>
      </Link>
    </Navigate>
  );
};

export default Navigation;
