import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  margin-right: 30px;
  &.active {
    color: red;
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
