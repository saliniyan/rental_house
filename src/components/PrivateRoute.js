// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ element }) => {
  const { currentUser } = useAuth();

  // If there is no user, redirect to login
  return currentUser ? element : <Navigate to="/" />;
};

export default PrivateRoute;
