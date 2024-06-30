import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import {Signup} from "./pages/Signup.jsx"
import {Signin} from "./pages/Signin.jsx"
import {Dashboard} from "./pages/Dashboard.jsx"
import {SendMoney} from "./pages/SendMoney.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<ProtectedRoute><SendMoney /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
