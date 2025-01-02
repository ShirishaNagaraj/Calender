import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/" element={<h1>Welcome to the Calendar Application</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
