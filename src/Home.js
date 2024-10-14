import React from 'react';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to ResearchersPoint</h1>
                <p>Your platform for sharing and discovering research projects.</p>
            </header>
            <section className="home-content">
                <h2>Explore Projects</h2>
                <p>Browse through various research submissions, connect with researchers, and access valuable resources.</p>
                <a href="/display" className="explore-button">View Submissions</a>
            </section>
        </div>
    );
};

export default Home;
