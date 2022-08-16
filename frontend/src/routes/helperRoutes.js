/* import React from "react";
import { Redirect, Route } from 'react-router';


export const PublicRoute = ({component, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component = {component} />;
    // If no authenticated
    return <Redirect to = '/' />;
} */