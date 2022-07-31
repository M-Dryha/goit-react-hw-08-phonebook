import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
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

const AuthNav = () => {
  return (
    <Navigate>
      <Link to="/register">
        <Button type="submit" variant="contained" size="medium">
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button type="submit" variant="contained" size="medium">
          Login
        </Button>
      </Link>
    </Navigate>
  );
};

export default AuthNav;
