import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from "react-router-dom"
import './App.css'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ArticlePage/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
