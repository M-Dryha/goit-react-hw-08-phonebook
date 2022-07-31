const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getCurrentUser = state => state.auth.isRefreshingCurrentUser;
const getErrorRegister = state => state.auth.isErrorRegister;
const getErrorLogin = state => state.auth.isErrorLogin;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getCurrentUser,
  getErrorRegister,
  getErrorLogin,
};
export default authSelectors;
