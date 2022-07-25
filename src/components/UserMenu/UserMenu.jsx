import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
`;

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  console.log('name', name);
  return (
    <Wrapper>
      <span>Welcome,{name} </span>
      <button type="button">Logout</button>
    </Wrapper>
  );
};
export default UserMenu;
