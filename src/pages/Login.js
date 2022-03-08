import React from 'react'
import bg from '../assets/background.jpeg'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { activeUser, login } from "../store/auth/auth-actions";
import { authActions } from "../store/auth/auth-slice";

// Material Components
// import Alert from '@mui/material/Alert';

const Login = () => {

    const dispatch = useDispatch();
    const loginDetails = useSelector(state => state.auth.loginDetails);
    const errors = useSelector(state => state.auth.errors);

    const onSetLoginDetails = (e, key) => {

        switch (key) {
            case "email":
                dispatch(authActions.setLoginDetails({ ...loginDetails, email: e.target.value }));
                break;
            case "password":
                dispatch(authActions.setLoginDetails({ ...loginDetails, password: e.target.value }));
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("test")
        await dispatch(login(loginDetails));
        dispatch(authActions.setLoginDetails({ email: "", password: "" }))
        await dispatch(activeUser())
    };

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hi 👋🏽 Back for more?</h1>
                    <p className="py-6">Come explore with me in my code playground!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" onChange={(e) => onSetLoginDetails(e, "email")}
                                value={loginDetails.email} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => onSetLoginDetails(e, "password")}
                                value={loginDetails.password} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
                        </div>

                        <label className="label">
                            <div className="label-text-alt">Don't have an account?</div> <a href="register" className="label-text-alt link link-hover">Register here</a>
                        </label>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Login