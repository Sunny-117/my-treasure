import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Logon from './pages/logon'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logon" element={<Logon></Logon>}></Route>
        </Routes>
      </Router>
    </div>
  )
}