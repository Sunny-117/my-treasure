import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logon" element={<div>11</div>}></Route>
        </Routes>
      </Router>
    </div>
  )
}