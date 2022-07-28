import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f8bbd0',
      main: '#f48fb1',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const HeaderAppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar
          color="primary"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default HeaderAppBar;
