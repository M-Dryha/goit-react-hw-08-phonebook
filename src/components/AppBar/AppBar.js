import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@mui/material';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

const HeaderAppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
export default HeaderAppBar;
