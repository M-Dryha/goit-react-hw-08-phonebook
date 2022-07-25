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

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">My Contacts</Link>
    </nav>
  );
};

export default Navigation;

// const Navigate = () => {
//   return (
//     <Nav>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/register">Register</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/contacts">My Contacts</Link>
//       </div>

//       <UserMenu />

//       <Outlet />
//     </Nav>
//   );
// };
