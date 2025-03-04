import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    //TODO - implement login and register functionality
    //return !!localStorage.getItem('token');
    return true;
    }

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
        }

        return children;
};

export default ProtectedRoute;