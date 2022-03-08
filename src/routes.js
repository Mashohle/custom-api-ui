import React from "react";
import { Navigate, useRoutes } from "react-router"

// Layouts
import AppLayout from "./layout/AppLayout";
import MainLayout from "./layout/MainLayout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const Router = (props) => {

    // Retrieves the last visited page within the application
    const page = localStorage.getItem('lastVisited');

    return useRoutes([
        {
            path: '/app',
            element: props.isAuthenticated ? <AppLayout /> : <Navigate to="/login" />,
            children: [
                // { path: 'dashboard', element: <Dashboard /> },
                { path: 'app', element: <Navigate to="/app/dashboard" /> }
            ],
        },
        {
            path: '/',
            element: !props.isAuthenticated ? <MainLayout /> : page ? <Navigate to={`/app/${page}`} /> : <Navigate to="/app/dashboard" />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: '404', element: <NotFound /> },
                { path: '/', element: <Navigate to="/login" /> },
                { path: '*', element: <Navigate to="404" /> }
            ],
        },
        {   //  When a page is not found - invalid url
            path: '*',
            element: <Navigate to="/404" replace />
        }
    ])
}

export default Router;