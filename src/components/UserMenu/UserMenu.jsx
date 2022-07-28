import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { authSelectors } from '../../redux/auth';
import styled from 'styled-components';
import { useGetContactsQuery } from '../../redux/myContactsSlice';
import AuthOperation from '../../redux/auth/auth-operation';

const Wrapper = styled.div`
  display: flex;
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
      <LogoutOutlinedIcon onClick={onLogOut} />
    </Wrapper>
  );
};
export default UserMenu;
