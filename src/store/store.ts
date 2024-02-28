import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "@app/store/api/apiSlice";

import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer  from "./reducers/rootReducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["api"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
    devTools: true
})

export const persistor = persistStore(store);