import React from 'react'
import bg from '../assets/background.jpeg'

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div class="hero-overlay bg-opacity-90"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hi 👋🏽 Welcome to my playground!</h1>
                    <p className="py-6">Whether you need ideas or working implementations of those ideas. You came to the right place, register now to get started!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <label className="label">
                            <div className="label-text-alt">Already have an account?</div> <a href="login" className="label-text-alt link link-hover">Login here</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register