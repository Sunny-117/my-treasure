import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Logon from './pages/logon'
import Home from './pages/Home'
import Student from './pages/Student'
import StudentDetail from './pages/StudentDetail'
import Demo from './Demo'
import MallAdminApp from './pages/MallAdminApp'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logon" element={<Logon></Logon>}></Route>
          <Route path="/student" element={<Student></Student>}></Route>
          <Route path="/details/:sNo" element={<StudentDetail></StudentDetail>}></Route>
          <Route path="/demo" element={<Demo></Demo>}></Route>
          <Route path="/MallAdminApp" element={<MallAdminApp></MallAdminApp>}></Route>
        </Routes>
      </Router>
    </div>
  )
}