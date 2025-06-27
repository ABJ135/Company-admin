import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Dashboard from './Pages/Dashboard';
import Campaigns from './Pages/Campaigns';
import Distribute from './Distribute';
import Submissions from './Pages/Submissions';
import Reports from './Pages/Reports';
import CustomerSupport from './Pages/ContactSupport'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/campaigns' element={<Campaigns />} />
        <Route path='/distribute' element={<Distribute />} />
        <Route path='/submissions' element={<Submissions />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/support' element={<CustomerSupport />} />
      </Routes>
    </div>
  )
}

export default App
