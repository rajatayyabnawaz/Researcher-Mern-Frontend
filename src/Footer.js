import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 ResearchersPoint. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/display">Submission</a></li>
                    <li><a href="/register">Upload</a></li>
                    
                </ul>
                <div className="social-media">
                    <a href="#" aria-label="Facebook">📘</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                    <a href="#" aria-label="LinkedIn">🔗</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
