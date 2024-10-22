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
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-primary">Welcome to Our Application!</h1>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <div>
                <h1>Welcome to House Finder</h1>
                <p>Your journey to finding the perfect home begins here! Whether you’re relocating to a new city or just looking for a change, we’re here to help you find the best rental options.</p>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>🌍 Comprehensive listings in various cities.</li>
                    <li>📸 High-quality images and 360-degree views of properties.</li>
                    <li>🔍 Advanced search filters to narrow down your options.</li>
                </ul>
                <h2>Get Started!</h2>
                <p>Sign up today to explore listings, save your favorites, and get in touch with landlords directly.</p>
            </div>
        </div>
    );
};

export default Home;
