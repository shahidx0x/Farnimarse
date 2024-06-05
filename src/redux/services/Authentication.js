import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://your-auth-api.com/api/v1/";

const getToken = () => localStorage.getItem("authToken");

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { endpoint }) => {
      const token = getToken();

      if (token && endpoint !== "login" && endpoint !== "register") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "register",
        method: "POST",
        body: userInfo,
      }),
    }),

    getUserProfile: builder.query({
      query: () => "profile",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserProfileQuery } =
  authApi;
