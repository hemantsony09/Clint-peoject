import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check for token in local storage

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to home page if no token
  }

  return children; // Render the child component if token exists
};

export default PrivateRoute;
