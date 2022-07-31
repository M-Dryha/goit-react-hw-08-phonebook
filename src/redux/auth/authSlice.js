import { createSlice } from '@reduxjs/toolkit';
import AuthOperations from './auth-operation';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [AuthOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [AuthOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [AuthOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [AuthOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [AuthOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [AuthOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
