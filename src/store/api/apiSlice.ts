import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const getRefreshToken = async (token: undefined, user: undefined, refreshToken: undefined) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const payload = {
            access_Token: token,
            refresh_Token: refreshToken,
            appUser: user,
        };
        const fetchResponse = await fetch(`${baseUrl}/Users/refresh`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        return await fetchResponse.json();
    } catch (e) {
        window.location.href = "/logout/msal";
    }
};

const baseQueryWithReAuth = async (
    args: any,
    api: { dispatch: (arg0: any) => unknown; },
    extraOptions: any
) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    let token;
    let user;
    let refreshToken;

    const rawBaseQuery = fetchBaseQuery({
        baseUrl: baseUrl,
    });

    let result = await rawBaseQuery(args, api, extraOptions);

    if(result.error && result.error.status === 401){
        const refreshResult = await getRefreshToken(token, user, refreshToken);

        if (refreshResult) {
            const promise = new Promise(function (resolve) {
                // resolve(api.dispatch(setToken(refreshResult?.access_Token)));
            });
            promise.then(() => {
                result = rawBaseQuery(args, api, extraOptions);
            });
        } else {
            window.location.href = "/logout/msal";
        }
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
});