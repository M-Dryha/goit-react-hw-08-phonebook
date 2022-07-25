import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  margin-right: 30px;
  &.active {
    color: red;
  }
`;

// const Nav = styled.nav`
//   display: flex;

//   justify-content: space-between;
// `;

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthNav;
