import axios from "axios";
import { authActions } from "./auth-slice";

export const register = (registerDetails) => {
    return async (dispatch) => {
        await axios.post(`/api/users/register`, registerDetails)
            .then((response) => {
                dispatch(authActions.setErrors(null))
                dispatch(authActions.setUser(response.data));
                dispatch(authActions.auth())
            })
            .catch((error) => {
                dispatch(authActions.setErrors(error.response.data.errors))
            })
    }
}

export const login = (loginDetails) => {
    return async (dispatch) => {
        await axios.post(`/api/users/login`, loginDetails)
            .then(async (response) => {
                dispatch(authActions.setErrors(null))
                dispatch(authActions.setUser(response.data));
                dispatch(authActions.auth())
            })
            .catch((error) => {
                dispatch(authActions.setErrors(error.response.data.errors))
            })
    }
}

// Clear token and store and logout
export const logout = () => {
    return async (dispatch) => {
        // await axios.get('/api/users/active-user')
        //     .then(async (response) => {
        //         await dispatch(authActions.setUser(response.data.activeUser));
        //         await dispatch(authActions.auth());
        //     })
    }
}

export const activeUser = () => {
    return async (dispatch) => {
        return await axios.get(`/api/users`,)
            .then((response) => {
                dispatch(authActions.setUser(response.data));
                dispatch(authActions.auth())
            })
            .catch((error) => {
                console.error('There was an error fetching the user!', error);
            })
    }
}