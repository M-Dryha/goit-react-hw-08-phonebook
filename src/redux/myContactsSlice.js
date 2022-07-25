import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: 'https://connections-api.herokuapp.com/' }) =>
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
  }),
  tagTypes: ['register'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({ url: '/contacts', method: 'get' }),
      }),
      addContact: build.mutation({
        query: value => ({ url: 'users/signup', method: 'post', body: value }),
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
