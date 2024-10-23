// src/components/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setCurrentUser(user); // Set user if found
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []); // Empty dependency array to run only on mount

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Persist user in localStorage
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Clear user from localStorage
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
