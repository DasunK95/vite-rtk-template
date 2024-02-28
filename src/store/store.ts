import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'

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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true
})

export const presistor = persistStore(store);