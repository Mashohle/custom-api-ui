import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./users/users-slice";
import authSlice from "./auth/auth-slice";

const store = configureStore({
    reducer: {
        // users: userSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;