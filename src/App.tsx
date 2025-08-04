import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import './App.css'

function App() {
  return (
    <Navbar />

    /* <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router> */
  )
}

export default App
