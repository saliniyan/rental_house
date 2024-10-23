import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./components/Contact";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
