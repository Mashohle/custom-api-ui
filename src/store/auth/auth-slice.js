import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        registerDetails: {
            username: "",
            email: "",
            password: ""
        },
        loginDetails: {
            email: "",
            password: ""
        },
        user: null,                       // The user information
        errors: null                  // Error on request
    },
    reducers: {
        setRegisterDetails(state, action) {
            state.registerDetails = action.payload
        },
        setLoginDetails(state, action) {
            state.loginDetails = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        auth(state, action) {
            const user = state.user

            if (!user) {
                state.isAuthenticated = false
            } else {
                state.isAuthenticated = true
            }
        },
        setErrors(state, action) {
            state.errors = action.payload;
        }
    }
})

export const authActions = userSlice.actions;

export default userSlice.reducer;
