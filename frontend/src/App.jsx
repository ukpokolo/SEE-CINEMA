import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import WhatsOn from './Pages/WhatsOn'; 
import ContactUs from './Pages/ContactUs';

function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/whats-on' element={<WhatsOn />}/>
                <Route path='/contact-us' element={<ContactUs />}/>
            </Routes>
        </div>
        </Router>
        
    )
   
}

export default App
