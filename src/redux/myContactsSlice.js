import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const сontactApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({
          url: 'contacts',
          method: 'get',
        }),
        providesTags: ['contacts'],
      }),
      addContact: build.mutation({
        query: value => ({
          url: 'contacts',
          method: 'post',
          data: value,
        }),
        invalidatesTags: ['contacts'],
      }),
      deleteContact: build.mutation({
        query: contactId => ({
          url: `contacts/${contactId}`,
          method: 'delete',
        }),
        invalidatesTags: ['contacts'],
      }),
    };
  },
});

// export const сontactApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62cfec821cc14f8c08805497.mockapi.io/api/v1',
//   }),
//   tagTypes: ['contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['contacts'],
//     }),
//     addContact: builder.mutation({
//       query: value => ({
//         url: '/contacts',
//         method: 'POST',
//         body: value,
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = сontactApi;
