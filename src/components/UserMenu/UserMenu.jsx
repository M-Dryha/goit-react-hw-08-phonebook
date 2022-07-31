import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { authSelectors } from '../../redux/auth';
import styled from 'styled-components';
import { useGetContactsQuery } from '../../redux/myContactsSlice';
import AuthOperation from '../../redux/auth/auth-operation';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserMenu = () => {
  const { refetch } = useGetContactsQuery();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    isLoggedIn && refetch();
  }, [isLoggedIn, refetch]);

  const onLogOut = e => {
    dispatch(AuthOperation.logOut());
  };

  return (
    <Wrapper>
      <Typography sx={{ mr: '25px' }}>Welcome,{name} </Typography>
      <Button type="submit" variant="contained" size="medium">
        <LogoutOutlinedIcon onClick={onLogOut} />
      </Button>
    </Wrapper>
  );
};
export default UserMenu;
