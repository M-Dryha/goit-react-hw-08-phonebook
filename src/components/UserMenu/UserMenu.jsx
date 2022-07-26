import { useSelector, useDispatch } from 'react-redux';
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
  console.log('name', name);
  return (
    <Wrapper>
      <span>Welcome,{name} </span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};
export default UserMenu;
