import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Routes, Route, Outlet, Link, BrowserRouter, useNavigate } from "react-router-dom";





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestCOmponent />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)






// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})



function TestCOmponent() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Test Component</h1>
      <button
        onClick={() => {
          navigate('/dashboard')
        }}
      >click me</button>
      <div>
        <Outlet />
      </div>
    </div>
  )
}



function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}



function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
