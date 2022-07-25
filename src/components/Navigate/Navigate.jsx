import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import UserMenu from '../UserMenu';

const Link = styled(NavLink)`
  margin-right: 30px;
  &.active {
    color: red;
  }
`;

const Nav = styled.nav`
  display: flex;

  justify-content: space-between;
`;

const Navigate = () => {
  return (
    <Nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">My Contacts</Link>
      </div>

      <UserMenu />

      <Outlet />
    </Nav>
  );
};

export default Navigate;
