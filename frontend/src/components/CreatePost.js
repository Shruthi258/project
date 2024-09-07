import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css'; 

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/posts', { title, content });
            navigate('/');
        } catch (error) {
            console.error('There was an error creating the post!', error);
        }
    };

    return (
        <div className="create-post-modal">
            <div className="create-post-header">
                <img
                    src="postlogo.png" 
                    alt="Profile"
                    className="profile-picture"
                />
                <div className="post-to-anyone">What's on your mind?</div>
            </div>
            <form onSubmit={handleSubmit} className="create-post-form">
                <div className="form-group">
                    <label htmlFor="title" className="post-label"></label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="post-title-input"
                        placeholder="Enter your title"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="What do you want to talk about?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="post-content-input"
                    />
                </div>
                <div className="post-footer">
                    <div className="post-footer-icons">
                        <button className="icon-button">😊</button>
                        <button className="icon-button">🖼️</button>
                        <button className="icon-button">📅</button>
                    </div>
                    <button type="submit" className="post-submit-btn">Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
