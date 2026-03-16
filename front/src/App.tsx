import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/layout/Login'
import SignUp from './components/layout/SignUp'
import Dashboard from './components/layout/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
