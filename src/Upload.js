import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Upload.css'; // Import the CSS file

const Upload = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('pdfFile', pdfFile);

        await axios.post('http://localhost:5000/submit', formData);
        navigate('/display');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Submit Your Research</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Title" 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Description" 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
                <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={(e) => setPdfFile(e.target.files[0])} 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Upload;
