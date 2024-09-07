// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('There was an error fetching the posts!', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Use the Navbar component */}
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create" element={<CreatePost />} /> {/* Create Post route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/services" element={<Services />} /> {/* Services route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
