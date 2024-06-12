import React from 'react';
import Home from '../pages/home';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Dashboard from "../pages/Dashboard";
import UserList from '../pages/userlist';
import Profile from '../pages/profile';
const Component = () => {
  return (
    <div>
      {/* Define your route-specific content here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Component;
