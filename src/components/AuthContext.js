// src/components/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Simulate fetching the current user (you can replace this with actual auth logic)
    const userData = localStorage.getItem('user'); // Get user from localStorage
    if (userData) {
      try {
        const user = JSON.parse(userData); // Attempt to parse the user data
        setCurrentUser(user);
      } catch (error) {
        console.error("Error parsing user data:", error); // Log parsing error
      }
    }
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage for demo purposes
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
