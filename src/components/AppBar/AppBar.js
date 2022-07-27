import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
export default AppBar;
