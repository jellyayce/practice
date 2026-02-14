import { useState } from 'react'
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'
import BrowsePage from './components/BrowsePage'
import LogoutModal from './components/LogoutModal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'
import Settings from './components/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/BrowsePage" element={<BrowsePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/LogoutModal" element={<LogoutModal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
