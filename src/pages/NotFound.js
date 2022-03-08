import React from 'react';
import notFound from '../assets/404.jpeg';
import {
    Link
} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${notFound})` }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button className="btn btn-primary" href="/">Go Back</button>
            </Link>
        </div>
    )
}

export default NotFound