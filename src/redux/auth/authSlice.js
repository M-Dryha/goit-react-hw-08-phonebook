import { createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';
import AuthOperations from './auth-operation';

const initialState = {
  user: {
    name: null,
    email: null,
    // password: null,
  },
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // onCreateRegister(state, action) {
    //   state = action.payload;
    //   return state;
    // },
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
  },
});

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       // return { data: result.data };
//       console.log(result);
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const registerApi = createApi({
//   reducerPath: 'register',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   endpoints(build) {
//     return {
//       //   getContacts: build.query({
//       //     query: () => ({ url: '/contacts', method: 'get' }),
//       //   }),
//       tagTypes: ['contacts'],
//       // registerUser: build.mutation({
//       //   query: data => ({
//       //     url: 'users/signup',
//       //     method: 'post',
//       //     body: data,
//       //   }),
//       //   invalidatesTags: ['contacts'],
//       // }),
//       registerUser: build.mutation({
//         query: value => ({
//           url: 'users/signup',
//           method: 'POST',
//           body: value,
//         }),

//         invalidatesTags: ['contacts'],
//       }),
//     };
//   },
// });
// console.log('registerUser', registerApi.registerUser);

// export const { onCreateRegister } = registerSlice.actions;
export default authSlice.reducer;
// export const { useRegisterUserMutation } = registerApi;
