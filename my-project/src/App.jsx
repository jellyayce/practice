import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import BrowsePage from './pages/BrowsePage'
import AppointmentPage from './pages/AppointmentPage'
import LogoutModal from './components/LogoutModal'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Signup from './pages/Signup'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/BrowsePage" element={<BrowsePage />} />
        <Route path="/AppointmentPage" element={<AppointmentPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/LogoutModal" element={<LogoutModal />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
