import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css'; // Import the CSS file

const Display = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    // Filter users based on the search term
    const filteredUsers = users.filter(user => 
        user.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>User Submissions</h1>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by title..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="user-container">
                {filteredUsers.map((user) => (
                    <div key={user._id} className="user-card">
                        <h2 className="user-title">{user.title}</h2>
                        <p className="user-details">Name: {user.name}</p>
                        <p className="user-details">Description: {user.description}</p>
                        <a 
                            href={`http://localhost:5000/${user.pdfFile}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="user-link">
                            View PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Display;
