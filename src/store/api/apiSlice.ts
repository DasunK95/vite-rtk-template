import {createApi} from "@reduxjs/toolkit/query/react";

const baseQueryWithReAuth: any = async (
    args: any,
    api: any,
    extraOptions: any
) => {

}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({}),
});