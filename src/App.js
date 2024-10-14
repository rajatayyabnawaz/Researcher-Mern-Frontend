import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Upload from './Upload';
import Display from './Display';
import Footer from './Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/upload" element={<Upload/>} />
                
                <Route path="/display" element={<Display/>} />
                
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
