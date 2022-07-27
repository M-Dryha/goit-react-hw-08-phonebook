import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  margin-right: 30px;
  &.active {
    color: red;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">My Contacts</Link>
    </nav>
  );
};

export default Navigation;
