import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Use the login function from AuthContext

    const handleLogin = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'a@gmail.com' && password === '123') {
            login(); // Set authenticated state
            navigate('/home'); // Redirect to the home page
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleLogin}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            </div>
                            <br />
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <a href="#!" className="link-danger">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
