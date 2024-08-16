import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// allows us to make boiler plates and make api calls

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = api;
