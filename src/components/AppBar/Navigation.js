import { NavLink } from 'react-router-dom';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import styled from 'styled-components';

const Link = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  color: white;
  margin-right: 30px;
  &.active {
    border: 1px solid white;
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
        <HouseSidingIcon sx={{ color: 'white' }} />
      </Link>
      <Link to="/contacts">My Contacts</Link>
    </Navigate>
  );
};

export default Navigation;
