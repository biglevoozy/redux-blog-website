import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/config/url.config';
import { IUser } from 'src/types/user.interface';

export const userAPI = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['users'],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], any>({
      query: () => ({
        url: '/users',
      }),
      providesTags: ['users'],
    }),
  }),
});
