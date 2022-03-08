import axios from "axios";
import { authActions } from "./auth-slice";

export const register = (registerDetails) => {
    return async (dispatch) => {
        await axios.post(`/api/users/register`, registerDetails)
            .then(async (response) => {
                dispatch(authActions.setErrors(null))
                await localStorage.setItem("token", response.data.token)
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
                await localStorage.setItem("token", response.data.token)
            })
            .catch((error) => {
                dispatch(authActions.setErrors(error.response.data.errors))
            })
    }
}

// Clear token and store and logout
export const logout = () => {
    return async (dispatch) => {
        await localStorage.clear();
        await dispatch(authActions.setUser(null));
        await dispatch(authActions.auth());
    }
}

export const activeUser = () => {
    return async (dispatch) => {
        return await axios.get(`/api/users`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                dispatch(authActions.setUser(response.data.user));
                dispatch(authActions.auth())
            })
            .catch((error) => {
                console.error('There was an error fetching the user!', error);
            })
    }
}