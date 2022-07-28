import { NavLink } from 'react-router-dom';
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

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthNav;
