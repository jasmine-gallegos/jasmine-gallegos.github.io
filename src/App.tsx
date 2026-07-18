import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReelPage from './pages/ReelPage'
import AboutMePage from './pages/AboutMePage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProjectInfoPage from './pages/ProjectInfoPage'

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  
  
  return (
    <>
      <BrowserRouter>
      <NavBar 
      selectedPage={currentPage} 
      onPageChange={setCurrentPage} />  
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ProjectInfoPage/>} />
          <Route path="/reel" element={<ReelPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
