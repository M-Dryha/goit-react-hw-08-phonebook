const getIsLoggedIn = state => state.register.isLoggedIn;
const getUserName = state => state.register.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
export default authSelectors;
