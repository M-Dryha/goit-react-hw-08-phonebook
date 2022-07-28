import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const сontactApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
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
          body: {
            name: value.name,
            number: value.number,
          },
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

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = сontactApi;
