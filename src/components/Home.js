import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Clear authentication state
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="container mt-4">
            <header className="d-flex justify-content-between align-items-center">
                <h1>Welcome to the Home Page!</h1>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <div className="mt-4">
                <p>This is a protected area of the application.</p>
                <p>You can only see this if you are logged in.</p>
            </div>
        </div>
    );
};

export default Home;
