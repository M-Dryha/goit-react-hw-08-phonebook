import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { authSelectors } from '../../redux/auth';
import styled from 'styled-components';
import AuthOperation from '../../redux/auth/auth-operation';

const Wrapper = styled.div`
  display: flex;
`;

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogOut = e => {
    dispatch(AuthOperation.logOut());
  };
  const name = useSelector(authSelectors.getUserName);
  return (
    <Wrapper>
      <Typography sx={{ mr: '25px' }}>Welcome,{name} </Typography>
      <LogoutOutlinedIcon onClick={onLogOut} />
    </Wrapper>
  );
};
export default UserMenu;
