import React from 'react'
import {  Route , Routes , BrowserRouter as Router } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import User from './components/pages/User'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import { GithubProvider } from './components/context/github/GithubContext'
function App() {
  return (
   <GithubProvider>
    <Router>
            <Navbar />
                <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/user" element={<User />} />
                    <Route exact path="*" element={<NotFound />} />

                
                </Routes>
                </main>
            <Footer />
    </Router>
   </GithubProvider>

  )
}

export default App