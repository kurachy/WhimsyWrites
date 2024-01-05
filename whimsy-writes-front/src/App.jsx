import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from "react-router-dom"
import './App.css'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './axiosConfig.js'

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ArticlePage/:id" element={<ArticlePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Signup isLoginPage={true} />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
